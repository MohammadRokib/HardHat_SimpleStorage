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
    console.log ("----------------------------------------------\n");

    // verifying the contract
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.deployTransaction.wait(6);
        await verify (simpleStorage.address, []);
    }

    // addPerson function
    console.log ("Adding person...\n");
    const addPersonResponse = await simpleStorage.addPerson("Jack", 989);
    await addPersonResponse.wait(1);
    console.log ("----------------------------------------------\n");
    
    // People list
    console.log ("People list\n");
    const list = await simpleStorage.list(0);
    console.log (`Name: ${list.name}`);
    console.log (`Number: ${list.num}`);
    console.log ("----------------------------------------------\n");

    // Accessing number
    console.log ("Accessing number\n");
    const numberResponse = await simpleStorage.number();
    console.log (`Stored number: ${numberResponse}`);
    console.log ("----------------------------------------------\n");

    // Store function
    console.log ("Storing number...\n");
    const storeResponse = await simpleStorage.store(9876);
    await storeResponse.wait(1);
    console.log ("----------------------------------------------\n");

    // Retrieve function
    console.log ("Retrieve function\n");
    const updatedValue = await simpleStorage.retrieve();
    console.log (`Updated value: ${updatedValue}`);
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
