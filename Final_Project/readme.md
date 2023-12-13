# ZOO DAO 
by Team 12 Encode Solidity Bootcamp

## Github repos
Github repos:

*  Frontend: https://github.com/BigBangInfinity/ballot_animal_NFT_shared-scaffold-eth-2_render_vercel
*  NestJS API: https://github.com/BigBangInfinity/ballot-2_animal_NFT_shared-backend-my-api
*  Contract: https://github.com/BigBangInfinity/ballot_animal_NFT_shared-ballotcontract

## Deployments

Frontend deployed on vercel: https://ballot-animal-nft-shared-s-git-050158-bigbanginfinitys-projects.vercel.app/
NestJS API deployed on Render: https://ballot2-animal-nft.onrender.com/route

NFT token contract deployed on Sepolia: https://sepolia.etherscan.io/address/0x11e1b946c16a35cb45c8e93137a2a592fce9dba6
Ballot contract deployed on Sepolia: https://sepolia.etherscan.io/address/0x7030b9584db8a623a9a4f5e1f21a5b3698df53d7

## Project Description

![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/65c7d434-5afd-427b-8656-802655f3b482)
![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/a0531f04-4014-43e6-a3fa-b65bc24e28fc)
![image](https://github.com/BigBangInfinity/Encode_SolidityBootcamp_Homework/assets/37957341/c181a28a-4f76-4a44-9cc1-3f28018f7caa)

Gamification of the tokenized ballot from class: Users rescue lost animal by minting an NFT and vote on a proposal what to do with the rescued animals:

*  Bring animals back to the zoo?
*  Release all animals in nature?
*  Start the barbecue...

The number of voting power equals the number of NFTs the user holds, but the user also has the option to cast less votes.

When the user clicks on "MINT NFT", an NFT from the server address 0x231815987D25f5b6CE42F0352e27BCC1e61d39db is minted (serwer wallet pays gas), using NestJS API from class.
Using the prevrandao, the animal (1 of 10), background color (1 of 10), gender (male 50%/female 50%), rarity (common 90%, rare 10%) are randomly generated, and an SVG image with animal emoji is created onchain,
and the collection can also be viewed on OpenSea: https://testnets.opensea.io/collection/mynft-7607
The Opensea API is used to display the user's NFT collection and the traits.

After that, the user (self-)delegate, casts votes and then can view the result.

