require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000,
    },
    goeril: {
      provider: () => {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          "https://goerli.infura.io/v3/" + process.env.INFURA_API_KEY
        );
      },
      network_id: "*", // eslint-disable-line camelcase
      gas: 4465030,
    },
  },
  contracts_build_directory: "./src/contracts/",
  compilers: {
    solc: {
      version: "^0.8",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
