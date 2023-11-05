import { ethers } from "hardhat";
import * as dotenv from 'dotenv';
import { Ballot, Ballot__factory } from "../typechain-types";
dotenv.config();

async function main() {
  //Receiving parameters
  const parameters = process.argv.slice(2);
  if (!parameters || parameters.length < 1)
    throw new Error("Parameters not provided");
  const contractAddress = parameters[0];

  //Configuring the provider
  const provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    const lastBlock = await provider.getBlock('latest');
    console.log(`Last block number: ${lastBlock?.number}`);
    const lastBlockTimestamp = lastBlock?.timestamp ?? 0;
    const lastBlockDate = new Date(lastBlockTimestamp * 1000);
    console.log(`Last block timestamp: ${lastBlockTimestamp} (${lastBlockDate.toLocaleDateString()} ${lastBlockDate.toLocaleTimeString()})`);
    //Configuring the wallet

    let wallet;
    const mnemonic = process.env.MNEMONIC;
    const privateKey = process.env.PRIVATE_KEY;

    if (mnemonic) {
      // Create a wallet from the mnemonic if it exists
      try {
        wallet = ethers.Wallet.fromPhrase(process.env.MNEMONIC ?? "", provider);
        console.log(`Using address from mnemonic: ${wallet.address}`);
      } catch (e) {
        throw new Error("Invalid mnemonic provided.");
      }
    } else if (privateKey) {
      // Fall back to using the private key if no mnemonic is available
      try {
        wallet = new ethers.Wallet(privateKey, provider);
        console.log(`Using address from private key: ${wallet.address}`);
      } catch (e) {
        throw new Error("Invalid private key provided.");
      }
    } else {
      throw new Error("No mnemonic or private key provided in .env file.");
    }




    // const wallet = ethers.Wallet.fromPhrase(process.env.MNEMONIC ?? "", provider);

    //Attaching the smart contract using Typechain
    const ballotFactory = new Ballot__factory(wallet);
    const ballotContract =  ballotFactory.attach(
      contractAddress
    ) as Ballot;  
    
    let length = 3;
    for (let index = 0; index < length; index++){
      let proposal = await ballotContract.proposals(index);
      console.log(`${ethers.decodeBytes32String(proposal.name)} votes: ${proposal.voteCount.toString()}`)
    }

    console.log(ballotContract.winningProposal())
    const winnerName  = await ballotContract.winnerName()
    console.log(`Winning proposal: ${ethers.decodeBytes32String(winnerName)}`);
    
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
