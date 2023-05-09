const { task } = require("hardhat/config");

task("balance", "Prints an account's balance")
    .addParam("account", "The account's address")
    .setAction(async (taskArgs, hre) => {
        const balance = await hre.ethers.provider.getBalance(taskArgs.account);
        console.log(`Balance: ${balance}`);
    });

module.exports = {};
