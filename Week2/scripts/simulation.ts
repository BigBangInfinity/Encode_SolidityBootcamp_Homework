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
    const wallet = ethers.Wallet.fromPhrase(process.env.MNEMONIC ?? "", provider);
    const wallet2 = new ethers.Wallet(process.env.PRIVATE_KEY2 ?? "", provider);
    const wallet3 = new ethers.Wallet(process.env.PRIVATE_KEY3 ?? "", provider);
    const wallet4 = new ethers.Wallet(process.env.PRIVATE_KEY4 ?? "", provider);

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


    const tx1 = await ballotContract.giveRightToVote(wallet2.address)
    const receipt1 = await tx1.wait();
    console.log(`Transaction completed ${receipt1?.hash}`)

    const tx2 = await ballotContract.giveRightToVote(wallet3.address)
    const receipt2 = await tx2.wait();
    console.log(`Transaction completed ${receipt2?.hash}`)    

    const tx3 = await ballotContract.connect(wallet2).vote(2);
    const receipt3 = await tx3.wait();
    console.log(`Transaction completed ${receipt3?.hash}`)

    const tx4 = await ballotContract.connect(wallet3).vote(2);
    const receipt4 = await tx4.wait();
    console.log(`Transaction completed ${receipt4?.hash}`)

    const tx5 = await ballotContract.giveRightToVote(wallet4.address)
    const receipt5 = await tx5.wait();
    console.log(`Transaction completed ${receipt5?.hash}`)    

    const tx6 = await ballotContract.delegate(wallet4.address);
    const receipt6 = await tx6.wait();
    console.log(`Transaction completed ${receipt6?.hash}`)

    const tx7 = await ballotContract.connect(wallet4).vote(1);
    const receipt7 = await tx7.wait();
    console.log(`Transaction completed ${receipt7?.hash}`)

    console.log(ballotContract.winningProposal())
    const winnerName  = await ballotContract.winnerName()
    console.log(ethers.decodeBytes32String(winnerName));

    
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
