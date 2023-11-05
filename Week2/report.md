# Report for Homework Week 2
## Team 12 members voting
* Discord names:
  * @ching (0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121)
  * @tben140 (0x8cd2573CE3502d85E73D7E287a1950fC1964c0E8)
* See also https://honored-cayenne-220.notion.site/Solidity-Homework-2-Team-12-00290a1dfcd248afafd1180cedbb8112

 | Function | Description | Transaction from account | TransactionHash
 | --- | --- | --- | --- |
 | Contract creation | Contract created with 3 proposals: Proposal1, Proposal2, Proposal3 | 0x8cd2573CE3502d85E73D7E287a1950fC1964c0E8 | 0x09982925169395e960283d031f77517f33e86e01a18e831209fa40865d713345 |
 | setOwner | change the chairperson to 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121| 0x8cd2573CE3502d85E73D7E287a1950fC1964c0E8 | 0x92729369ad8e9f95d2bbf16e30ac7ed806155844c648eb10e0fc030313d198a7|
 | setOwner | change the chairperson to 0x8cd2573CE3502d85E73D7E287a1950fC1964c0E8| 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x9d862c3026126bceff417cc8a397eba30bd76ce3e21413f423f02e57e5d1f024|
 | giveRightToVote | give right to vote to 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x8cd2573CE3502d85E73D7E287a1950fC1964c0E8 | 0x4cd0ec6317513a3bb3e38ba60b46e09737f709756ea3d0f4951fa56b001de5da |
 | vote | vote for proposal 3 | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x54cce7337cda054e06b36140b30a681523942912134d0f1b53b93cd0918996e8 |
 | vote | vote for proposal 2 | 0x8cd2573CE3502d85E73D7E287a1950fC1964c0E8 | 0xf4c85adc29a217949272a0e5e2863b416209b06b10305d7d9dbd7a236662ea20 |
 
* Ballot.sol deployed on Sepolia
  ```
  npx ts-node .\scripts\DeployWithEthers.ts Proposal1 Proposal2 Proposal3
  ```
  Contract address: 0xa5F419A04DA46CB00aa3670D1C68C9238871A6e3

* Give right to vote to 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121

```
  npx ts-node .\scripts\GiveRightToVote.ts 0xa5F419A04DA46CB00aa3670D1C68C9238871A6e3 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121
```

* Vote for Proposal3:

```
  npx ts-node .\scripts\CastVote.ts 0xa5F419A04DA46CB00aa3670D1C68C9238871A6e3 2
```

* Get proposal winner, together with vote count:
```
  npx ts-node .\scripts\GetWinner.ts 0xa5F419A04DA46CB00aa3670D1C68C9238871A6e3
```

## Single voter ballot:
* Discord name: @Hadrien Royo (0x90dDf1Fff5444B93AB9b832b9d4152b9507A13C3)
* Contract address (Sepolia): 0xb0a1a19fC15cB176F60bBcC498864e05Bb110Efb

## Simulation of 4 accounts

* Accounts (owned by @ching):
  * Account 1: 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121
  * Account 2: 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a
  * Account 3: 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A
  * Account 4: 0xb6e971a41A54178642aC768FD30bE7f7d69e960a

 | Function | Description | Transaction from account | TransactionHash
 | --- | --- | --- | --- |
 | Contract creation | Contract created with 3 proposals: Proposal1, Proposal2, Proposal3 | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x744e42a79e63f7b7ad45c1bf016190aa7b655119db27809f94e77c1cdfb090bd |
 | giveRightToVote | give right to vote to 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a| 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x08bae017098753204045b6ddfe43fb53a95eb884bae3d8b335087520508cfe12|
 | giveRightToVote | give right to vote to 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A| 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0xd731987743abf36634f40850bbad0e8565de90d1a312997ded2db7e871badf6f|
 | vote | vote for proposal 3 | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x540b0e6090ca12392ff4269e18e24c9d3cd0a25dfc2a40e12e09667f7bd3619e |
 | vote | vote for proposal 3 | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0xf11bbfb8d4f3f177b6956b31fd76a50533bbe16de3e90cc4f57a767904bccfd4 |
 | giveRightToVote | give right to vote to 	0xb6e971a41A54178642aC768FD30bE7f7d69e960a| 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x7fe2c0d718e9edb1178d284f5794333bd6c81208c23cefdbbdb51ec514c91a1b|
 | delegate | delegate vote to 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x362f550ea0a94fefdc1d7d0a7466b77af7368ea3b05a8a8ffc072d18d5fcf209|
 | vote | vote for proposal 2 | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0xba98c1d0546786393ffc9c09dd6d5c83752d8c5a7e707b7133d9c4da35dc7f8e |

* Ballot.sol deployed on Sepolia
  ```
  npx ts-node .\scripts\DeployWithEthers.ts Proposal1 Proposal2 Proposal3
  ```
  Contract address: 0x905a5801E9bbFDF69bAFEeCe82e30f0745340549

* Simulation of 4 accounts
  ```
  npx ts-node .\scripts\Simulation.ts 0x905a5801E9bbFDF69bAFEeCe82e30f0745340549
  ```

* Get proposal winner
  ```
  npx ts-node .\scripts\GetWinner.ts 0x905a5801E9bbFDF69bAFEeCe82e30f0745340549  
  ```
  Output:
  ```
  Last block number: 4636263
  Last block timestamp: 1699205160 (05/11/2023 17:26:00)
  Proposal1 votes: 0
  Proposal2 votes: 2
  Proposal3 votes: 2
  Promise { <pending> }
  Winning proposal: Proposal2
  ```
