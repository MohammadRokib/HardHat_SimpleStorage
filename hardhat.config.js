require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goerli";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.7",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
    },
};
