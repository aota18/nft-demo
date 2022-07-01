const { ethers } = require("hardhat");

async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  await myNFT.deployed();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// Deployed NFT Address : 0x617D8290707d668A92df67985850905B49919Ff0
