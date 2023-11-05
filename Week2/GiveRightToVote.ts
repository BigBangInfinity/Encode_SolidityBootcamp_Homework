import { ethers } from "ethers";
import * as dotenv from 'dotenv';
import { Ballot, Ballot__factory } from "../typechain-types";
dotenv.config();

async function main() {
  //Receiving parameters
  const parameters = process.argv.slice(2);
  if (!parameters || parameters.length < 1)
    throw new Error("Parameters not provided");
  const contractAddress = parameters[0];
  const target_wallet = parameters[1];

  
  //Configuring the provider
  const provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    const lastBlock = await provider.getBlock('latest');
    console.log(`Last block number: ${lastBlock?.number}`);
    const lastBlockTimestamp = lastBlock?.timestamp ?? 0;
    const lastBlockDate = new Date(lastBlockTimestamp * 1000);
    console.log(`Last block timestamp: ${lastBlockTimestamp} (${lastBlockDate.toLocaleDateString()} ${lastBlockDate.toLocaleTimeString()})`);
    //Configuring the wallet
    const wallet = ethers.Wallet.fromPhrase(process.env.MNEMONIC ?? "", provider);
    console.log(`Using address ${wallet.address}`);
    const balanceBN = await provider.getBalance(wallet.address);
    const balance = Number(ethers.formatUnits(balanceBN));
    console.log(`Wallet balance ${balance} ETH`);
    if (balance < 0.01) {
      throw new Error("Not enough ether");
    }
    //Attaching the smart contract using Typechain
    const ballotFactory = new Ballot__factory(wallet);
    const ballotContract =  ballotFactory.attach(
      contractAddress
    ) as Ballot;
   
    const tx = await ballotContract.giveRightToVote(target_wallet)
    const receipt = await tx.wait();
    console.log(`Transaction completed ${receipt?.hash}`)    
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
