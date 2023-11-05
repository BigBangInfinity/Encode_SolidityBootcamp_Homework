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
