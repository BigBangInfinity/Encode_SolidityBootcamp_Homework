# Report for Homework Week5

Collaboration between @Ching#1844, @hadrienroyo, @tben140, Team 12

* Deploy lottery:
  ```
  C:\contracts_folder>npx ts-node .\scripts\deployLottery.ts
  ```

  Lottery contract deployed at 0x6C8994447111c20F3eD36CCF3DA3ff808153B905 (Sepolia)

  Token contract deployed at 0x45c33eF2bD2746752867398828959c1A9ce99eDb (Sepolia)

  ```
  const BET_PRICE = 1;
  const BET_FEE = 0.2;
  const TOKEN_RATIO = 1000n;
  ```

  Each bet costs 1.2 tokens, 1 token goes to the prize pool, 0.2 token fee goes to the owner pool. 1 ETH = 1000 tokens.
  
* Launch scaffold eth:
  ```
  C:\scaffold-eth-2>yarn start
  ```
  
  Wallets
  * Wallet 1: 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121
  * Wallet 2: 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a
  * Wallet 3: 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A
  * Wallet 4: 0xb6e971a41A54178642aC768FD30bE7f7d69e960a


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


* Transactions:
  * Lottery contract: Contract address 0x6C8994447111c20F3eD36CCF3DA3ff808153B905
    
   | Function | Description | Transaction from account | TransactionHash |
   | --- | --- | --- | --- |
   | Contract creation (0x60806040) | Lottery contract created | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x4919381ea4c82dee27bc2a46284359061a5d6b0dbcdf517f1bee797fd39a6719 |
   | Purchase Token | purchase 20 lottery tokens | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0xe437f00cdeaa43d4a7618016a98145fbb72abb5a3355d642ee6ba818184b724b |
   | Purchase Token | purchase 20 lottery tokens | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0xea650989344d647934e3ffff061b388e735f14955032c910e9d464bb95b09d0a |
   | Purchase Token | purchase 20 lottery tokens | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x3c8273dd6b4a5a7036beab1b2dad47f28e2822456067b14896cd9f47b80022a3 |
   | Purchase Token | purchase 20 lottery tokens | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0x4e73900954be63ad45299a8d39dc7513da1fc76ebb1ee753495bb1f72094d66d |  
   | Open Bets | open bets | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x08442d50fa04149fa40adab6531f26f612c194a907a1d960f71fca949f922152  |
   | Bet Many | make 5 bets | 0x974BFC05C4B51d4B9d84131A9A870EEcCFB77121 | 0x91f9e2361641f47515d8b3920466de447e085331f17972b844a81b145b069104  |
   | Bet Many | make 10 bets | 0x7d77b0d031B4B8C0444eaE9b778479bbFcd6721a | 0x575addb576a6a92849df80384016dda4206581f8f6ed8d31a9c673b8eb4127a5  |
   | Bet Many | make 12 bets | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x965e0815f68ce4e8bc45f36a34b4f5cff5b5608272e6feaefa0909dc7d434d62  |
   | Bet Many | make 15 bets | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0x6fcb964c21f25c0049040c896fc3e5220496c3a6d3ab8ff5c87d822b87591514  |    
   | Close Lottery | close lottery, Wallet 3 wins | 0xb6e971a41A54178642aC768FD30bE7f7d69e960a | 0xf5553f84697904d184ed7e91c995ae22f19909f7409e9446ef42c2073bd8f5c0 |
   | Prize Withdraw  | Wallet 3 claims prize | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x7d9f51bca7eb8ca1259c1777f4ea26ecf2a90154cc14b9e40660ffe7bb5dcdba |
   | Return Tokens | burn 40 lottery tokens, get back 0.04 ETH | 0xf28e0bA425AB5CFFf9B5731dB3f0b439e49aE16A | 0x28a000671deed9d8a16a1441790cfde8762844489b84cd0c0e141f352dd5cd72 |

