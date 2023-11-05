# Report for Homework Week 2
* Discord names:
  * @ching (0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121)
  * @tben140 (0x8cd2573CE3502d85E73D7E287a1950fC1964c0E8)
* See also https://honored-cayenne-220.notion.site/Solidity-Homework-2-Team-12-00290a1dfcd248afafd1180cedbb8112
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
