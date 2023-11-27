# Report for Homework Week5

Collaboration between @Ching#1844, @hadrienroyo, @tben140, Team 12

* Deploy lottery:
  ```
  C:\contracts_folder>npx ts-node .\scripts\deployLottery.ts
  ```

  Lottery contract deployed at 0x6C8994447111c20F3eD36CCF3DA3ff808153B905 (Sepolia)

  Token contract deployed at 0x45c33eF2bD2746752867398828959c1A9ce99eDb (Sepolia)
  
* Launch scaffold eth:
  ```
  C:\scaffold-eth-2>yarn start
  ```

  Wallets 1-4 purchase 20 tokens each
  
  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/b86a2f91-7ccd-4f3d-a03d-7e7a130bedb4)

  State: lottery closed

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/ea409471-1431-4ed7-9953-22c91691c465)

  All 4 wallets approve lottery contract to spend lottery token

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/cf6d0bf2-2581-476f-aa94-69aa73a7dff4)

  Open bets for 600 seconds

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/057ca2cb-b624-4f23-a5ec-ed2422e87d86)

  State: Lottery open

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/f913b26f-5cdc-47dc-aeec-e5cb9a4f57bd)

  bets:
  Wallet 1 makes 5 bets
  Wallet 2 makes 10 bets
  Wallet 3 makes 12 bets
  Wallet 4 makes 15 bets
  
  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/cab052ff-97f9-41e0-a43f-a8c55780202c)

  Prize pool: 42 tokens
  Owner pool: 8.4 tokens

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/a8de7cce-3c61-4126-b5b9-4c3a7ddf4d55)

  time is over...

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/1c2b8ffd-9607-4ff8-a96f-93ed2f7ccbfd)

  Close the lottery

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/87fa879d-2add-4616-bade-23d77782950e)

  Wallet 3 wins price of 42 tokens and claims prize.

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/7b3fcf11-d0ed-4201-b3c8-0e9f36d1de00)


  Wallet 1 claims owner pool

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/04369bd9-306a-42fa-8203-119c5a1de4c7)

  Wallet 3 burns 40 tokens, gets 0.04 ETH in return.

  ![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/a679e7cc-c280-4e5b-ab14-41afd5f78662)
