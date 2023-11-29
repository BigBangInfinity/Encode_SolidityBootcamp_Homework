# Report for Homework Week5 (new submission)

Old submission: https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/blob/main/Week5/report.md

In old submission, the frontend was run on localhost, but in new submission the frontend is deployed on the web with Vercel https://vercel-nextjs-sjgr.vercel.app/

Collaboration between @Ching#1844, @hadrienroyo, @tben140, Team 12

Work done on two repos:

contracts on https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/blob/main/Week5

frontend on https://github.com/BigBangInfinity/vercel

frontend deployed on Vercel: https://vercel-nextjs-sjgr.vercel.app/



* Deploy lottery:

  contracts on https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/blob/main/Week5
  
  ```
  C:\contracts_folder>npx ts-node .\scripts\deployLottery.ts
  ```

  Lottery contract deployed at 0x446DCD9a69Eade03457BC745ff0F0627e33b94EE (Sepolia)

  Token contract deployed at 0xf4472eCfc5e78c9dC8b759e62bfFe9e1DBe78050 (Sepolia)

  Contract deployed by wallet (owner) 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121

  ```
  const BET_PRICE = 1;
  const BET_FEE = 0.2;
  const TOKEN_RATIO = 1000n;
  ```

  Each bet costs 1.2 tokens, 1 token goes to the prize pool, 0.2 token fee goes to the owner pool. 1 ETH = 1000 tokens.

* Copy the ABI of the compiled Lottery contract and LotteryToken contract here:

  https://github.com/BigBangInfinity/vercel/tree/main/packages/nextjs/abis

  These ABIs are imported in https://github.com/BigBangInfinity/vercel/blob/main/packages/nextjs/pages/index.tsx when running the frontend to read/write.
  
* Deploy on https://vercel.com/

  When deploying, enter the following environment variables:

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/cd7ba029-092e-42d3-b2b5-c17eba955770)

  `NEXT_PUBLIC_RPC_ENDPOINT_URL` not shown but also needed

  ```
  NEXT_PUBLIC_TOKEN_ADDRESS = "0xf4472eCfc5e78c9dC8b759e62bfFe9e1DBe78050"
  NEXT_PUBLIC_LOTTERY_ADDRESS = "0x446DCD9a69Eade03457BC745ff0F0627e33b94EE"
  ```
  
  Wallets
  * Wallet 1 (owner): 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121
  * Wallet 2: 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a
  * Wallet 3: 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A
  * Wallet 4: 0xb6e971a41A54178642aC768FD30bE7f7d69e960a


  Wallets 1-4 purchase 20 tokens each

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/fbeae7f7-0b7e-4ff8-980a-898436335fda)


  State: lottery closed

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/ea409471-1431-4ed7-9953-22c91691c465)

  All 4 wallets approve lottery contract to spend lottery token

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/2c781df1-b628-40d9-b5cc-fc307e67a3d0)

  Open bets for 600 seconds

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/65c22978-a60a-446e-8bb1-08fa80804426)

  State: Lottery open

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/b2841a07-8fbb-4049-8177-4c31b26a9f74)


  bets:
  Wallet 1 makes 5 bets
  Wallet 2 makes 10 bets
  Wallet 3 makes 12 bets
  Wallet 4 makes 15 bets
  
  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/1a303849-9b51-430e-9a98-0d1a45c8510b)


  Prize pool: 42 tokens
  Owner pool: 8.4 tokens

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/2baa182f-61b1-44d2-add4-563b22254446)


  time is over...

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/cad7ead6-9cd6-4cc7-abbd-ebbe18112e46)


  Close the lottery

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/92518b2b-dbf4-45c2-99fb-ba13ceeca5b1)


  Wallet 4 wins price of 42 tokens and claims prize.

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/e3d47969-93cb-4db8-b915-a094bb336fbe)




  Wallet 1 (owner) claims owner pool

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/4bfa0b43-358e-4e73-9457-927cff132ad2)


  Wallet 4 burns 40 tokens, gets 0.04 ETH in return.

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/5c7b95d1-352f-455c-ad4f-7d9a9fb96c95)



* Transactions:
  * Lottery contract: Contract address 0x446DCD9a69Eade03457BC745ff0F0627e33b94EE
    
   | Function | Description | Transaction from account | TransactionHash |
   | --- | --- | --- | --- |
   | Contract creation (0x60806040) | Lottery contract created | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x4ef1334f1f4e3394f8683e7dbb493c21625c581d2983d403cbc2927667671cd6 |
   | Purchase Token | purchase 20 lottery tokens | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x5808cc63b430a10361d45537cefb68e34e03dfda211f1553194574dd1db44b2b |
   | Purchase Token | purchase 20 lottery tokens | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x0397119da98483e34890d6bd7c9d7c1669676ac9f968b840415c33ff2df5bc8c |
   | Purchase Token | purchase 20 lottery tokens | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x2ea196f33c4f2c847a6eb668b095d8f2c186e6bb3e507065ec1bd4d3c51ecdc1 |
   | Purchase Token | purchase 20 lottery tokens | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0x0b7b4bd6ff67fd4663f975cba522d3b3fa4527ecc1630eb0f721e346c2d3de61 |  
   | Open Bets | open bets | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x3113e9efddc9c38f84d534ffca60f56abe249e43c3d5a182e002cae27a8555c0  |
   | Bet Many | make 5 bets | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0xc8b48343f486f0d2db2df5367b5593c6e4276672c19cce1e761188c35d88f89a  |
   | Bet Many | make 10 bets | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x48c38110c0c1e1946f6838d056b53a30afa15fc0dfb12111e0324d7d74b36a5c  |
   | Bet Many | make 12 bets | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0xa2ea66a0383f9cffcf880e72f6f576971992a76488d7b4fc7ae7b04e2db59a17  |
   | Bet Many | make 15 bets | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0xec82327b3cb28f2a1bb9560dd534efd12d2e0dce30972a1cff592d12355c09c3  |    
   | Close Lottery | close lottery, Wallet 4 wins | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x3b5a1ac400f7dd3feebb8f2cf967598661fce32d0ab93dad4cf96fd4eb29b484 |
   | Prize Withdraw  | Wallet 4 claims prize | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0xd3abfa73644ff5f4913f84de9cd850da382fc3fecd20ca917b9c626f9551b254 |
   | Return Tokens | burn 40 lottery tokens, get back 0.04 ETH | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0xcbd81ecfba70c2a8c10cf74bbcf10fa4c4495aab57196ca1c1e2f82290e485cf |


