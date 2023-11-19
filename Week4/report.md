# Report for Homework Week4
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

  
  
