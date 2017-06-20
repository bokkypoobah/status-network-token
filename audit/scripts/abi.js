miniMeTokenFactoryAbi=[{"constant":false,"inputs":[{"name":"_parentToken","type":"address"},{"name":"_snapshotBlock","type":"uint256"},{"name":"_tokenName","type":"string"},{"name":"_decimalUnits","type":"uint8"},{"name":"_tokenSymbol","type":"string"},{"name":"_transfersEnabled","type":"bool"}],"name":"createCloneToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"}];
sgtAbi=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"creationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_blockNumber","type":"uint256"}],"name":"balanceOfAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_cloneTokenName","type":"string"},{"name":"_cloneDecimalUnits","type":"uint8"},{"name":"_cloneTokenSymbol","type":"string"},{"name":"_snapshotBlock","type":"uint256"},{"name":"_transfersEnabled","type":"bool"}],"name":"createCloneToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"parentToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"generateTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_blockNumber","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"data","type":"uint256[]"}],"name":"multiMint","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"transfersEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"parentSnapShotBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"destroyTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenFactory","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_transfersEnabled","type":"bool"}],"name":"enableTransfers","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_tokenFactory","type":"address"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_token","type":"address"},{"indexed":true,"name":"_controller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"ClaimedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_cloneToken","type":"address"},{"indexed":false,"name":"_snapshotBlock","type":"uint256"}],"name":"NewCloneToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Approval","type":"event"}];
sntAbi=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"creationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_blockNumber","type":"uint256"}],"name":"balanceOfAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_cloneTokenName","type":"string"},{"name":"_cloneDecimalUnits","type":"uint8"},{"name":"_cloneTokenSymbol","type":"string"},{"name":"_snapshotBlock","type":"uint256"},{"name":"_transfersEnabled","type":"bool"}],"name":"createCloneToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"parentToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"generateTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_blockNumber","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"transfersEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"parentSnapShotBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"destroyTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenFactory","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_transfersEnabled","type":"bool"}],"name":"enableTransfers","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_tokenFactory","type":"address"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_token","type":"address"},{"indexed":true,"name":"_controller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"ClaimedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_cloneToken","type":"address"},{"indexed":false,"name":"_snapshotBlock","type":"uint256"}],"name":"NewCloneToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Approval","type":"event"}];
statusContributionAbi=[{"constant":true,"inputs":[],"name":"destEthDevs","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"endBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maxSGTSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalGuaranteedCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalNormalCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maxCallFrequency","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"sntController","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"failSafeLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"exchangeRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maxGasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"finalizedBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"startBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"onTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"pauseContribution","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maxGuaranteedLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lastCallBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dynamicCeiling","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"destTokensDevs","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"guaranteedBuyersBought","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokensIssued","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_snt","type":"address"},{"name":"_sntController","type":"address"},{"name":"_startBlock","type":"uint256"},{"name":"_endBlock","type":"uint256"},{"name":"_dynamicCeiling","type":"address"},{"name":"_destEthDevs","type":"address"},{"name":"_destTokensReserve","type":"address"},{"name":"_destTokensSgt","type":"address"},{"name":"_destTokensDevs","type":"address"},{"name":"_sgt","type":"address"},{"name":"_maxSGTSupply","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"SGT","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"guaranteedBuyersLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"destTokensSgt","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"resumeContribution","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"SNT","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_th","type":"address"},{"name":"_limit","type":"uint256"}],"name":"setGuaranteedAddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"destTokensReserve","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"onApprove","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_th","type":"address"}],"name":"proxyPayment","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"finalizedTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_token","type":"address"},{"indexed":true,"name":"_controller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"ClaimedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_th","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_tokens","type":"uint256"},{"indexed":false,"name":"_guaranteed","type":"bool"}],"name":"NewSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_th","type":"address"},{"indexed":false,"name":"_limit","type":"uint256"}],"name":"GuaranteedAddress","type":"event"},{"anonymous":false,"inputs":[],"name":"Finalized","type":"event"}];
contributionWalletAbi=[{"constant":true,"inputs":[],"name":"endBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"multisig","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contribution","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_multisig","type":"address"},{"name":"_endBlock","type":"uint256"},{"name":"_contribution","type":"address"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"}];
devTokensHolderAbi=[{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"collectTokens","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_owner","type":"address"},{"name":"_contribution","type":"address"},{"name":"_snt","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_token","type":"address"},{"indexed":true,"name":"_controller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"ClaimedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_holder","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"TokensWithdrawn","type":"event"}];
sgtExchangerAbi=[{"constant":true,"inputs":[],"name":"snt","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"sgt","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"collected","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"onTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"statusContribution","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"onApprove","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"collect","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"","type":"address"}],"name":"proxyPayment","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"inputs":[{"name":"_sgt","type":"address"},{"name":"_snt","type":"address"},{"name":"_statusContribution","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_token","type":"address"},{"indexed":true,"name":"_controller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"ClaimedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_holder","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"TokensCollected","type":"event"}];
dynamicCeilingAbi=[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"curves","outputs":[{"name":"hash","type":"bytes32"},{"name":"limit","type":"uint256"},{"name":"slopeFactor","type":"uint256"},{"name":"collectMinimum","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"currentIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nCurves","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"allRevealed","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contribution","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_curveHashes","type":"bytes32[]"}],"name":"setHiddenCurves","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_limits","type":"uint256[]"},{"name":"_slopeFactors","type":"uint256[]"},{"name":"_collectMinimums","type":"uint256[]"},{"name":"_lasts","type":"bool[]"},{"name":"_salts","type":"bytes32[]"}],"name":"revealMulti","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_limit","type":"uint256"},{"name":"_slopeFactor","type":"uint256"},{"name":"_collectMinimum","type":"uint256"},{"name":"_last","type":"bool"},{"name":"_salt","type":"bytes32"}],"name":"revealCurve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"revealedCurves","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_limit","type":"uint256"},{"name":"_slopeFactor","type":"uint256"},{"name":"_collectMinimum","type":"uint256"},{"name":"_last","type":"bool"},{"name":"_salt","type":"bytes32"}],"name":"calculateHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"collected","type":"uint256"}],"name":"toCollect","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_index","type":"uint256"}],"name":"moveTo","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_owner","type":"address"},{"name":"_contribution","type":"address"}],"payable":false,"type":"constructor"}];
sntPlaceHolderAbi=[{"constant":true,"inputs":[],"name":"snt","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"onTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contribution","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"sgtExchanger","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"activationTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"onApprove","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"","type":"address"}],"name":"proxyPayment","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"inputs":[{"name":"_owner","type":"address"},{"name":"_snt","type":"address"},{"name":"_contribution","type":"address"},{"name":"_sgtExchanger","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_token","type":"address"},{"indexed":true,"name":"_controller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"ClaimedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_newController","type":"address"}],"name":"ControllerChanged","type":"event"}];