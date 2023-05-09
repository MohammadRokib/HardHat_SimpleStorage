const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", function () {
    let contract, deploy;

    beforeEach(async function () {
        contract = await ethers.getContractFactory("SimpleStorage");
        deploy = await contract.deploy();
    });

    it("Should start with a default number 0", async function () {
        const defaultValue = await deploy.retrieve();
        const expectedValue = "0";

        // assert.equal(defaultValue.toString(), expectedValue);
        expect(defaultValue.toString()).to.equal(expectedValue);
    });

    it("Should update when called", async function () {
        const newValue = "321";
        const tx = await deploy.store(newValue);
        await tx.wait(1);

        const value = await deploy.retrieve();
        assert.equal(value.toString(), newValue);
    });

    it("Should add a person", async function () {
        const newName = "Jack";
        const newNum = "789";

        const addPerson = await deploy.addPerson(newName, newNum);
        await addPerson.wait(1);
        const list = await deploy.list(0);

        assert.equal(list.name, newName);
        expect(list.num).to.equal(newNum);
    });
});

// to run only one specific test put it.only at the beginning of the test.

// to run a specific test from the command line run the command:
// yarn hardhat test --grep unique_word_from_the_first_parameter_of_it_function
