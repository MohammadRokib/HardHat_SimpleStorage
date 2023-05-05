// imports
const { ethers, run, network } = require ("hardhat");

// async main
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

    console.log ("Deploying contract...");
    const simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.deployed();

    // to see the contract address where the contract is deployed
    console.log (`Deployed contract to: ${simpleStorage.address}`);

    // verifying the contract
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.deployTransaction.wait(6);
        await verify (simpleStorage.address, []);
    }
}

async function verify (contractAddress, args) {
    console.log ("Verifying contract...");
    try {
        await run ("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log ("Already verified");
        } else {
            console.log (e);
        }
    }
}

// main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
