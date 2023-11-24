# Report for Homework Week4
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

