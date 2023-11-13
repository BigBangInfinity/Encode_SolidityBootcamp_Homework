# Report for Homework Week3
* Deploy MyToken:
  ```
  npx ts-node .\scripts\deployMyToken.ts
  ```
  Contract Address (Sepolia): 0x8Df4dFD85846EEE51c57c813A40f07e9f696bCc3
* Mint ERC voting tokens:
  ```
  npx ts-node .\scripts\ERCMint.ts
  ```
* Delegate votes:
  ```
  npx ts-node .\scripts\delegateVotes.ts
  ```
* Deploy tokenized ballot:
  ```
  npx ts-node .\scripts\deployTokenizedBallot.ts
  ```
  Contract Address (Sepolia): 0xAE7B4276c4Eef71920ff429Ea20847B933401b58
* Get number of votes:
  ```
  npx ts-node .\scripts\getVotes.ts
  ```
  Output:
  ```
  Wallet 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 votes: 1.0
  Wallet 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a votes: 1.0
  Wallet 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A votes: 2.0
  Wallet 0xb6e971a41A54178642aC768FD30bE7f7d69e960a votes: 0.0
  ```
* Cast votes:
  ```
  npx ts-node .\scripts\CastVote.ts
  ```
* Get proposal winner:
  ```
  npx ts-node .\scripts\GetWinner.ts
  ```
  Output:
  ```
  Last block number: 4682068
  Last block timestamp: 1699832292 (12/11/2023 23:38:12)
  Proposal1 votes: 0.0
  Proposal2 votes: 2.0
  Proposal3 votes: 2.0
  Winning proposal: Proposal2
  ```
* Transactions:
  * Contract address 0x8Df4dFD85846EEE51c57c813A40f07e9f696bCc3
    
   | Function | Description | Transaction from account | TransactionHash |
   | --- | --- | --- | --- |
   | Contract creation (0x61016060) | MyToken contract created | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0xf3f6326aaf4c3bbeb2d69e74811d7fee4097ed31eb53ccd60046f3b4508bab72 |
   | Mint | mint voting token for 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x74195172afb4581a8e7e52b8ab069fa5e57479c574e62a9c691f2067f857673b |
   | Mint | mint voting token for 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x9370d11583660cc0a5d79f5c06552d99a4a51ad965bf6eca9d0028dc3b97e219 |
   | Mint | mint voting token for 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x56f11d1c637070000b351bf28b08ea813a84332bd3ca80caa5f3fe01993c2dfc |
   | Mint | mint voting token for 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x56f11d1c637070000b351bf28b08ea813a84332bd3ca80caa5f3fe01993c2dfc |
   | Transfer | transfer voting token to 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0xab351979ae2320a4167d9a31ee5e68545c2ed13c9c6e9e37a3ca6f9d3a3fbfce |
   | Delegate | self-delegate vote | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x8ee0d6afef3c443775fbb9106eb2a0993efc335472e1cf2d73bfe6f520d27eca |
   | Delegate | self-delegate vote | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x01e499e5855ec9e9cd85ba437e57a2316cc0209a78447d66e331a265802d6f03 |
   | Delegate | self-delegate vote | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x035c72e9d3617816fcfee6711069ab23340850ceea2fc678516ac3802f4755b9 |
   | Delegate | self-delegate vote | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0x4c657bc35a8019fa6376a600351553a39f9641c26ec5c9238c41594d68eb03bc |

  * Contract address 0xAE7B4276c4Eef71920ff429Ea20847B933401b58

   | Function | Description | Transaction from account | TransactionHash |
   | --- | --- | --- | --- |
   | Contract creation (0x60806040) | TokenizedBallot contract created: Proposal1, Proposal2, Proposal3 | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0xd7f90279de759bea91f04fd2e6621e8a049e4c672dec1cc8d7d71a7718fc205f |
   | Vote | vote for Proposal2 | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x01e08d6787b4e2aa38c230fa425f8d0935bb1378fd89e66f4274ae60961a0da2 |
   | Vote | vote for Proposal2 | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x4cd9984827e6927652f596110db961d2aaa7b789d1ba96b7ea59ff4b50172ad3 |
   | Vote | vote for Proposal3 | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x41f41a64ff0aacbb77c219e21c3e3778c8231149f2f349b439fe727960cb1925
