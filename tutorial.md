<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">HardHat SimpleStorage</h3>

  <p align="center">
    <a href="https://github.com/MohammadRokib/HardHat_SimpleStorage/blob/main/tutorial.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/MohammadRokib/HardHat_SimpleStorage">View Demo</a>
    ·
    <a href="https://github.com/MohammadRokib/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/MohammadRokib/repo_name/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#deploy-contract">Deploy Contract</a></li>
    <li><a href="#verify-contract">Verify Contract</a></li>
    <li>
      <a href="#interact-with-the-contract">Interact with the Contract</a>
      <ul>
        <li><a href="#addperson-function">AddPerson function</a></li>
        <li><a href="#people-list">People list</a></li>
        <li><a href="#accessing-number">Accessing Number</a></li>
        <li><a href="#store-function">Store function</a></li>
        <li><a href="#retrieve-function">Retrieve function</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a project where I'll deploy the SimpleStorage smart contract locally using ***HardHat***. The smart contract is written in solidity. I will also demonstrate how to interact with the smart contract.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Ethereum
* HardHat
* Yarn
* Node.js
* Javascript

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

In this project I will write the SimpleStorage.sol smart contract using ***ethereum***. To deploy the smart contract I will use ***hardhat***. I will use ***yarn*** as the package manager.

### Prerequisites

* Download Node.js from [here](https://nodejs.org/en/download)
* Download Git from [here](https://git-scm.com/downloads)
* Install yarn with the command:
  ```sh
  corepack enable
  ```

### Installation

1. Create a project in your desired directory with the command:
   ```sh
   yarn init
   ```
2. Some options will be given. Click enter for all these options. It should look like this:
   ```sh
   ↳ yarn init
   yarn init v1.22.19
   warning ../../../package.json: No license field
   question name (101):
   question version (1.0.0):
   question description:
   question entry point (index.js):
   question repository url:
   question author:
   question license (MIT):
   success Saved package.json
   Done in 22.59s
   ```
3. Add HardHat to the project with the command:
   ```sh
   yarn add --dev hardhat
   ```
4. Then initialize hardhat in the project with the command:
   ```sh
   yarn hardhat
   ```
5. Choose the first option ***Create a JavaScript project***. Then click ***enter*** to add root path of the project. Then click ***Y*** to add ***.gitignore***. And lastly click ***Y*** to install all the dependencies.
6. Add ***.env*** to the project with the command:
   ```sh
   yarn add --dev dotenv
   ```
7. Adding etherscan from hardhat in order to use programatic verification:
   ```sh
   yarn add --dev @nomiclabs/hardhat-etherscan
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Deploy Contract

* Delete the default contract inside the contract folder of the project directory. And put this [SimpleStorage.sol](https://github.com/MohammadRokib/HardHat_SimpleStorage/blob/main/contracts/SimpleStorage.sol) smart contract inside the contracts folder.
* Now to compile the smart contract first make sure the solidity version in `SimpleStorage.sol` and in `module.exports` inside ***hardhat.config.js*** are the same. Then run the command:
   ```sh
   yarn hardhat compile
   ```
* After compiling the contract now I will write the deploy script so that I can deploy the smart contract. Delete everything inside the scripts folder of the project directory and create a new file named `deploy.js` and paste the below code:
   ```js
   // imports

   // async main

   // main
   main()
       .then(() => process.exit(0))
       .catch((error) => {
            console.error(error);
            process.exit(1);
       });
   ```
* Then import ethers from hardhat. Type this in the imports section of deploy.js:
   ```js
   const { ethers } = require ("hardhat");
   ```
* Now to get the contract factory of SimpleStorage.sol type this inside async main:
   ```js
   // async main
   async function main() {
       const SimpleStorageFactory = await ehters.getContractFactory("SimpleStorage");
   }
   ```
* After that to deploy the contract, type the followings after SimpleStorageFactory inside async main of deploy.js:
   ```js
   const simpleStorage = await SimpleStorageFactory.deploy();
   await simpleStorage.deployed();

   // to see the contract address where the contract is deployed
   console.log (`Deployed contract to: ${simpleStorage.address}`);
   ```
* Any smart contract needs a ***rpc url*** and a ***private key*** to be deployed to a contract. But in hardhat both of these are provided by ***hardhat network*** by default. So now, to deploy SimpleStorage.sol I will type the command:
   ```sh
   yarn hardhat run scripts/deploy.js
   ```
* I deployed the smart contract using the hardhat network. Now I will deploy it on another network. I will use ***Goerli Testnet*** as another network to deploy the contract. To do that we need 2 things:
    * RPC URL: It will define the network we want work on. We can get an RPC URL from Alchemy. [See how]()
    * Private Key: It will act as an account on the network we are using. We can get a private key from metamask. [See how]()
* Add a `.env` file in the project directory. It will contain all the sensitive information which we don't want to share. Such as: RPC_URL, PRIVATE_KEY, API_KEY etc. Add the following in the ***.env*** file:
   ```js
   GOERLI_RPC_URL = YOUR_RPC_URL_FROM_ALCHEMY
   PRIVATE_KEY = YOUR_PRIVATE_KEY_FROM_METAMASK
   ```
* Now to deploy the contract from Goerli Testnet first import ***.env*** in `hardhat.config.js` type this at the top:
   ```js
   require("dotenv").config();
   ```
* After that first call the RPC URL and the PRIVATE KEY from the .env file and store them in variables like this after all the imports:
   ```js
   const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goerli";
   const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey";
   ```
* Then add the following after ***solidity: 0.8.7;*** inside ***module.exports*** in ***hardhat.config.js***:
   ```js
   networks: {
       goerli: {
           url: GOERLI_RPC_URL,
           accounts: [PRIVATE_KEY],
           chainID: 5,
       },
   },

   // ChainID is 5 for Goerli Testnet
   ```
* After that to deploy the contract with goerli testnet type the command:
   ```sh
   yarn hardhat run scripts/deploy.js --network goerli
   ```
   If the deployment is successful then the output will be:
   ```sh
   Deploying contract...
   Deployed contract to: 0xDe577a5C98FD5501394e9e88817B2146BB958f1e
   Done in 8.39s
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Verify Contract

* After deploying the contract, it has to be verified. We can do that on Goerli Etherscan. Although a different method can be used to do that, which is called programmatic verification. We can verify the contract programmatically. Which means, the contract can be verified with some codes right after it is deployed.
* In order to do programmatic verification first I will ***import*** the ***etherscan plugin*** in ***hardhat.config.js***. To do that type this at the top:
   ```js
   require("@nomiclabs/hardhat-etherscan");
   ```
* Next we need an API key from etherscan in order to do the programmatic verification through etherscan. To do that first go to [etherscan.io]() and create an account. Log into your account. Then got [API key](https://etherscan.io/myapikey) page. Then click `+ Add` button and create a new API key.
* Since the API key is a sensitive information we shouldn't share it with anyone I will add it in the .env file. To do that type this in the .env file:
   ```js
   ETHERSCAN_API_KEY = YOUR_ETHERSCAN_API_KEY
   ```
* Then define the API key before module.exports where we have already defined the RPC URL and the PRIVATE KEY in hardhat.config.js:
   ```js
   const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key";
   ```
* Now to use the Etherscan API key in the code first create a new section named ***etherscan*** inside ***module.exports*** in ***hardhat.config.js***:
   ```js
   etherscan: {
       apiKey: ETHERSCAN_API_KEY,
   },
   ```
* Now to verify the contract first import ***run*** from hardhat inside ***deploy.js***:
   ```js
   const { ethers, run } = require ("hardhat");
   ```
* Then add `async function verify` after `async function main` in deploy.js:
   ```js
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
   ```
* After doing these now if we ***call the verify function*** ***from the main function*** in deploy.js, it will verify the contract. The verification will only work if it is deployed on a testnet. If the contract is deployed on the hardhat network it can't be verified in etherscan. We can easily determine the network on which the contract is deployed using chainID. Type the following inside ***async function main*** in deploy.js to verify the contract:
   ```js
   if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
       await simpleStorage.deployTransaction.wait(6);
       await verify (simpleStorage.address, []);
   }
   ```
* Lastly run deploy.js using the goerli network with the command:
   ```sh
   yarn hardhat run scripts/deploy.js --network goerli
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Interact with the Contract

After deploying the contract now I will interact with the contract from the deploy script.

### AddPerson function

To interact with the addPerson function type the below code after verifying the contract:
```js
const addPersonResponse = await simpleStorage.addPerson("Jack", 989);
await addPersonResponse.wait(1);
```

### People list

To access the people list type the below code after addPerson function in deploy.js:
```js
const list = await simpleStorage.list(0);
console.log (`Name: ${list.name}`);
console.log (`Number: ${list.num}`);
```

### Accessing Number

To access the stored number directly type the below code after people list in deploy.js:
```js
const numberResponse = await simpleStorage.number();
console.log (`Stored number: ${numberResponse}`);
```

### Store function

To access the store function type the below code after accessing number in deploy.js:
```js
const storeResponse = await simpleStorage.store(9876);
await storeResponse.wait(1);
```

### Retrieve function

To access the retrieve function type the below code after store function in deploy.js:
```js
const updatedValue = await simpleStorage.retrieve();
console.log (`Updated value: ${updatedValue}`);
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Users can store a number.
- [ ] Users can store a name and a number.
    - [ ] Users can search the number with the name.

See the [open issues](https://github.com/MohammadRokib/HardHat_SimpleStorage/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

MohammadRokib - [Linkedin](https://www.linkedin.com/in/m0hammadrokib/) - mohammadrokibkhan@gmail.com

Project Link: [https://github.com/MohammadRokib/HardHat_SimpleStorage](https://github.com/MohammadRokib/HardHat_SimpleStorage)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [HardHat tutorial](https://hardhat.org/tutorial)
* [Difference between dependencies & devDependencies](https://stackoverflow.com/questions/18875674)
* [Meaning of "@" prefix on npm packages](https://stackoverflow.com/questions/36667258)
* [How does Hardhat network works](https://hardhat.org/hardhat-network/docs/overview)
* [ChainList](https://chainlist.org/)
* [HardHat-Verify](https://github.com/NomicFoundation/hardhat/tree/main/packages/hardhat-verify)
* [Hardhat-tasks](https://hardhat.org/hardhat-runner/docs/advanced/create-task)
* [Rekt](https://rekt.news/leaderboard/)
* [Mocha](https://mochajs.org/)
* [Testing-by-example](https://remix-ide.readthedocs.io/en/latest/unittesting_examples.html)
* [Hardhat-gas-reporter](https://www.npmjs.com/package/hardhat-gas-reporter?activeTab=readme)
* [Solidity-coverage](https://github.com/sc-forks/solidity-coverage)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/MohammadRokib/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/MohammadRokib/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MohammadRokib/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/MohammadRokib/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/MohammadRokib/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/MohammadRokib/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/MohammadRokib/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/MohammadRokib/HardHat_SimpleStorage/issues
[license-shield]: https://img.shields.io/github/license/MohammadRokib/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/MohammadRokib/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/m0hammadrokib/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
