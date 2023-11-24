# Report for Homework Week4 (old submission)

New submission: https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/blob/main/Week4_v2/report.md

* Deploy MyToken:
  ```
  C:\ballotcontract>npx ts-node .\scripts\deployMyToken.ts
  ```
  Contract address (Sepolia): 0x7B8af6fa5ddfFB418CcAE3d27aba99aCcf20a075
  Minter role is deleted, so everybody can mint the token.

* Launch scaffold eth:
  ```
  C:\scaffold-eth-2>yarn start
  ```

* Launch API:
  ```
  C:\backend\my-api>yarn run start:dev
  ```

* Request token:
  
  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/96ff22ed-20a4-4c8e-854c-0003397b92b9)
  
  Four wallets request token:
  * 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121
  * 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a
  * 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A
  * 0xb6e971a41A54178642aC768FD30bE7f7d69e960a


* Delegate votes:
  ```
  npx ts-node .\scripts\delegateVotes.ts
  ```
* Deploy tokenized ballot:
  ```
  npx ts-node .\scripts\deployTokenizedBallot.ts
  ```

  Contract address (Sepolia): "0x48b5ef8f89C604360F254BCb386CDa579094E406"
* Cast votes:
  ```
  npx ts-node .\scripts\CastVote.ts
  ```

* Terminate and relaunch API to update ballot address:
  ```
  C:\backend\my-api>yarn run start:dev
  ```

* Get result from frontend:

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/272f5f05-c236-4d83-b3a1-fbd8ae255c40)

* Transactions:
  * Contract address 0x7B8af6fa5ddfFB418CcAE3d27aba99aCcf20a075
    
   | Function | Description | Transaction from account | TransactionHash |
   | --- | --- | --- | --- |
   | Contract creation (0x61016060) | MyToken contract created | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x209c2ab85ae2cf7bd8f5d11d6d4ad685860ea180362776b6c7d230d0b71cee1f |
   | Mint | mint voting token for 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x42bbe6bd35867236b8b16a6917ebbd8ddcea77c25701400efc737184f500b473 |
   | Mint | mint voting token for 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x9370d11583660cc0a5d79f5c06552d99a4a51ad965bf6eca9d0028dc3b97e219 |
   | Mint | mint voting token for 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x9f47ed6425db12539090bf1f678107b2c27a29d1ecdd8e83eb2303e23dbc45bf |
   | Mint | mint voting token for 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0x1f42186888cd8481cbfa4b24c8dd1f02b4627e6e39423bd5480c5ae6975a5c1b |
   | Transfer | transfer voting token to 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0x0bb98c2a6611316658eb7132c073c2937b1801084fb0f45587e3e3cb326a791c |
   | Delegate | self-delegate vote | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0xbcab71e926ba202604b4de3288cefeb1aaf1b1085f5dfc7a14528021c39cb5db |
   | Delegate | self-delegate vote | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0xb3c37d595d72ba04865e35041c0ebad07c747af4522cc280d83dc307d29258de |
   | Delegate | self-delegate vote | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0xad4f30e865a51c50a74973dff040d2c9843dee7550008af4e84881c1ce8706fb |
   | Delegate | self-delegate vote | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0x2f611e4a373eb1eeda96e0ccea787c782d84ee20897cd4f5c16c1ba1c774d6b6 |

  * Contract address 0x48b5ef8f89C604360F254BCb386CDa579094E406

   | Function | Description | Transaction from account | TransactionHash |
   | --- | --- | --- | --- |
   | Contract creation (0x60806040) | TokenizedBallot contract created: Proposal1, Proposal2, Proposal3 | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0xec56712728197aeed1408bb9e000deed7ddb109d57ccec561c769ab6b36826e8 |
   | Vote | vote for Proposal2 | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x97525f91b9b2c511f6153529062c61bf804319510cdd2845017faf3d8691fd3c |
   | Vote | vote for Proposal2 | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x629afe73a75a02b4b3719911c4fcbe497eede0f3b9df6ba1a50a68981c2ff7c1 |
   | Vote | vote for Proposal3 | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x8fa7c5575b6d83a20f92912e4d8130c491111424833106eb0d6779adb255ff4d

