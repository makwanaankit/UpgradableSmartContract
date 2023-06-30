const { ethers, upgrades } = require("hardhat");

async function main() {
  const num2 = await ethers.getContractFactory("NUM2");
  console.log("NUM1 is upgrading  .....");
  await upgrades.upgradeProxy(
    "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    num2
  );
  console.log("NUM1 is upgrade to Num2");
}
main();
