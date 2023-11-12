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
