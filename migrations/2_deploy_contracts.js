const SmartContract = artifacts.require("SmartContract");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(SmartContract);
  });
};
