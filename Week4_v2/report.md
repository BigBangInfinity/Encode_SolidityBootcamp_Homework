# Report for Homework Week4 (new submission)

Collaboration between @ching, @hadrienroyo, @tben140

Old submission: https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/blob/main/Week4/report.md
* Deploy MyToken:
  ```
  C:\ballotcontract>npx ts-node .\scripts\deployMyToken.ts
  ```
  Contract address (Sepolia): 0x9aC2703a812b45c240CF39AE3E3224D765001648
  Minter role is deleted, so everybody can mint the token.

* Launch scaffold eth:
  ```
  C:\scaffold-eth-2>yarn start
  ```
* Request 

![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/eb693558-f3b4-447e-b28b-05ad974c2162)


  Four wallets request token:
  * 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121
  * 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a
  * 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A
  * 0xb6e971a41A54178642aC768FD30bE7f7d69e960a

* All four wallets self delegate vote, total supply = 4.

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/601bebda-aaa5-4abc-bb3f-97bd309309b4)

* Deploy tokenized ballot:
  ```
  npx ts-node .\scripts\deployTokenizedBallot.ts
  ```

  Contract address (Sepolia): "0x8890dD5f63Ef46A4cB7aB8F6E79Bbe3e806350f2"

* Terminate and relaunch API to update ballot address:
  ```
  C:\backend\my-api>yarn run start:dev
  ```
* Cast Votes on frontend

![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/798f31bc-540a-4cc6-95c7-a9eb8b2f72a8)

* Read voting results

![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/21c11d6e-900c-4400-ab28-bbc05c7b30e0)


* Transactions:
  * Contract address 0x7B8af6fa5ddfFB418CcAE3d27aba99aCcf20a075
    
   | Function | Description | Transaction from account | TransactionHash |
   | --- | --- | --- | --- |
   | Contract creation (0x61016060) | MyToken contract created | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0xfdfaf165c326e713185b0489b673fb86e44994269f7310274aa1b0684a24506d |
   | Mint | mint voting token for 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x351f1e889c5177629dda796a9774efdd1352920de24d2eeacc8c5d1414918605 |
   | Mint | mint voting token for 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x056ca81cb04d2545dafe43d61a008bc0485475b1aa2fb1c6523a33e9411a2720  |
   | Mint | mint voting token for 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x2a7f36d594a9a32777a32da46623d7c11d72fb8ac8f506fac287b32f94cbc34d  |
   | Mint | mint voting token for 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0x04edd5b00c2437f57cedec9bd5af7b70151ded6fd5af1131032be94693986526 |
   | Transfer | transfer voting token to 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0x5b37c046f16c5e3e4722fe917284f5d8d6ff5e27eb92139f27db4108199aeea3 |
   | Delegate | self-delegate vote | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0xd41fd8d17312857c66bda7f9a06b771cb31380b4d565f5bc54fd98839163c692 |
   | Delegate | self-delegate vote | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0xe59e7add5580e03b7803a967b96a380fabeff70d8c12808d5ebba022cfed8343 |
   | Delegate | self-delegate vote | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x1299252f12d06e0b189c8c3efecc4c0e6a1cc1aa373b145b0ac6041a23a63b35 |
   | Delegate | self-delegate vote | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0x2d3662723bc2f3a4bd1d7323f7c84af8cbf21c5aeaafe2783680bce5de275cce |

  * Contract address 0x8890dD5f63Ef46A4cB7aB8F6E79Bbe3e806350f2

   | Function | Description | Transaction from account | TransactionHash |
   | --- | --- | --- | --- |
   | Contract creation (0x60806040) | TokenizedBallot contract created: Proposal1, Proposal2, Proposal3 | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0xec56712728197aeed1408bb9e000deed7ddb109d57ccec561c769ab6b36826e8 |
   | Vote | vote for Proposal2 | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0xe4d21e655768d96b56c7e2ea395a29bb66abab4bba4ccfe6326ce7041ddb95c2 |
   | Vote | vote for Proposal2 | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x5425014b19ce1eb8d7587893482ee23475638820398dd87c064af39db822155c |
   | Vote | vote for Proposal3 | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x7a02646d214f79e3c35938708416d14aa489dffa4d4a4fe588271bcccdd23dc1 |

