import { ethers, run } from "hardhat";
import { TokenizedBallot__factory } from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config();


async function main() {

    const provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
    console.log(`Using address ${wallet.address}`);

    const myTokenAddress = "0x9aC2703a812b45c240CF39AE3E3224D765001648";
    const targetBlockNumber = 4759169;
    const proposalNames = ["Proposal1", "Proposal2", "Proposal3"];

    // Convert proposal names to bytes32 arrays
    const ProposalNames: string[] = proposalNames.map((proposalNames) => ethers.encodeBytes32String(proposalNames));


    const contractFactory = new TokenizedBallot__factory(wallet);
    const contract = await contractFactory.deploy(ProposalNames, myTokenAddress, targetBlockNumber);
    await contract.waitForDeployment();
    const contractAddress = contract.target;
    console.log(`Token contract deployed at ${contractAddress}\n`);

}


main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
