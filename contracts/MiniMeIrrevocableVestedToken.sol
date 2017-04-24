pragma solidity ^0.4.8;

// Slightly modified Zeppelin's Vested Token deriving MiniMeToken

import "./MiniMeToken.sol";
import "zeppelin/SafeMath.sol";

/*
    Copyright 2017, Jorge Izquierdo (Aragon Foundation)

    Based on VestedToken.sol from https://github.com/OpenZeppelin/zeppelin-solidity

    SafeMath – Copyright (c) 2016 Smart Contract Solutions, Inc.
    MiniMeToken – Copyright 2017, Jordi Baylina (Giveth)
 */

// @dev MiniMeIrrevocableVestedToken is a derived version of MiniMeToken adding the
// ability to createTokenGrants which are basically a transfer that limits the
// receiver of the tokens how can he spend them over time.

// For simplicity, token grants are not saved in MiniMe type checkpoints.
// Vanilla cloning ANT will clone it into a MiniMeToken without vesting.
// More complex cloning could account for past vesting calendars.

contract MiniMeIrrevocableVestedToken is MiniMeToken, SafeMath {
  // Keep the struct at 2 sstores (1 slot for value + 64 * 3 (dates) + 20 (address) = 2 slots (2nd slot is 212 bytes, lower than 256))
  struct TokenGrant {
    address granter;
    uint256 value;
    uint64 cliff;
    uint64 vesting;
    uint64 start;
  }

  mapping (address => TokenGrant[]) public grants;

  mapping (address => bool) public disabledGrants;

  modifier canTransfer(address _sender, uint _value) {
    if (_value > spendableBalanceOf(_sender)) throw;
    _;
  }

  function MiniMeIrrevocableVestedToken (
      address _tokenFactory,
      address _parentToken,
      uint _parentSnapShotBlock,
      string _tokenName,
      uint8 _decimalUnits,
      string _tokenSymbol,
      bool _transfersEnabled
  ) MiniMeToken(_tokenFactory, _parentToken, _parentSnapShotBlock, _tokenName, _decimalUnits, _tokenSymbol, _transfersEnabled) {}

  // @dev Add canTransfer modifier before allowing transfer and transferFrom to go through
  function transfer(address _to, uint _value)
           canTransfer(msg.sender, _value)
           returns (bool success) {
    return super.transfer(_to, _value);
  }

  function transferFrom(address _from, address _to, uint _value)
           canTransfer(_from, _value)
           returns (bool success) {
    return super.transferFrom(_from, _to, _value);
  }

  function spendableBalanceOf(address _holder) constant public returns (uint) {
    return transferableTokens(_holder, uint64(now));
  }

  // @notice An exchange or account that is not managed by a human may want to refuse to receive tokens with vesting.
  function setVestedGrantsDisabled(bool disabled) public {
    disabledGrants[msg.sender] = disabled;
  }

  function grantVestedTokens(
    address _to,
    uint256 _value,
    uint64 _start,
    uint64 _cliff,
    uint64 _vesting) {

    // Check start, cliff and vesting are properly order to ensure correct functionality of the formula.
    if (_cliff < _start) throw;
    if (_vesting < _start) throw;
    if (_vesting < _cliff) throw;

    if (disabledGrants[_to]) throw;       // If the receiver has explicitely blocked receiving grants, throw.
    if (grants[_to].length > 20) throw;   // To prevent a user being spammed and have his balance locked (out of gas attack when calculating vesting).

    TokenGrant memory grant = TokenGrant(msg.sender, _value, _cliff, _vesting, _start);
    grants[_to].push(grant);

    if (!transfer(_to, _value)) throw;
  }

  // @dev Not allow token grants
  function revokeTokenGrant(address _holder, uint _grantId) {
    throw;
  }

  //
  function tokenGrantsCount(address _holder) constant returns (uint index) {
    return grants[_holder].length;
  }

  function tokenGrant(address _holder, uint _grantId) constant returns (address granter, uint256 value, uint256 vested, uint64 start, uint64 cliff, uint64 vesting) {
    TokenGrant grant = grants[_holder][_grantId];

    granter = grant.granter;
    value = grant.value;
    start = grant.start;
    cliff = grant.cliff;
    vesting = grant.vesting;

    vested = vestedTokens(grant, uint64(now));
  }

  function vestedTokens(TokenGrant grant, uint64 time) internal constant returns (uint256) {
    return calculateVestedTokens(
      grant.value,
      uint256(time),
      uint256(grant.start),
      uint256(grant.cliff),
      uint256(grant.vesting)
    );
  }

  function calculateVestedTokens(
    uint256 tokens,
    uint256 time,
    uint256 start,
    uint256 cliff,
    uint256 vesting) internal constant returns (uint256)
    {

    // Shortcuts for before cliff and after vesting cases.
    if (time < cliff) return 0;
    if (time >= vesting) return tokens;

    // Cliff tokens is the part of the tokens that gets unlocked after the cliff.
    // Interpolated in function of the relation of vesting and cliff time.

    // Actual order of operations is changed to divide the biggest numbers because
    // of the lack of floating point types

    // cliffTokens = tokens * (cliff - start) / (vesting - start)
    uint256 cliffTokens = safeDiv(
                            safeMul(
                              tokens,
                              safeSub(cliff, start)
                              ),
                            safeSub(vesting, start)
                            );

    // Vesting tokens is the part of the token grant that wasn't part of the cliff tokens
    // vestingTokens = tokens - cliffTokens
    uint256 vestingTokens = safeSub(tokens, cliffTokens);

    // Vested vesting tokens is the part of the vesting tokens that are already vested

    // vestedVestingTokens = vestingTokens * (time - cliff) / (vesting - cliff)
    uint256 vestedVestingTokens = safeDiv(
                                    safeMul(
                                      vestingTokens,
                                      safeSub(time, cliff)
                                      ),
                                    safeSub(vesting, cliff)
                                    );

    // cliff tokens + vestedVestingToken
    return safeAdd(cliffTokens, vestedVestingTokens);
  }

  function nonVestedTokens(TokenGrant grant, uint64 time) internal constant returns (uint256) {
    // Of all the tokens of the grant, how many of them are not vested?
    // grantValue - vestedTokens
    return safeSub(grant.value, vestedTokens(grant, time));
  }

  // @dev The date in which all tokens are transferable for the holder
  // Useful for displaying purposes (not used in any logic calculations)
  function lastTokenIsTransferableDate(address holder) constant public returns (uint64 date) {
    date = uint64(now);
    uint256 grantIndex = grants[holder].length;
    for (uint256 i = 0; i < grantIndex; i++) {
      date = max64(grants[holder][i].vesting, date);
    }
  }

  // @dev How many tokens can a holder transfer at a point in time
  function transferableTokens(address holder, uint64 time) constant public returns (uint256) {
    uint256 grantIndex = grants[holder].length;

    if (grantIndex == 0) return balanceOf(holder); // shortcut for holder without grants

    // Iterate through all the grants the holder has, and add all non-vested tokens
    uint256 nonVested = 0;
    for (uint256 i = 0; i < grantIndex; i++) {
      nonVested = safeAdd(nonVested, nonVestedTokens(grants[holder][i], time));
    }

    // Balance - totalNonVested is the amount of tokens a holder can transfer at any given time
    return safeSub(balanceOf(holder), nonVested);
  }
}