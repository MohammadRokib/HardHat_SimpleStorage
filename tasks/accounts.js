const { task } = require("hardhat/config");

task("accounts", "Prints all the accounts")
    .setAction(async (taskArgs, hre) => {
        const accounts = await hre.ethers.getSigners();

        for (const account of accounts) {
            console.log(account.address);
        }
    }
);

module.exports = {};
