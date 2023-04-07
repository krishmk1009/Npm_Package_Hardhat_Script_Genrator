const genrateScript = require("./index");
const fs = require("fs");

const contract = fs.readFileSync("./smartContract.sol", "utf-8");
console.log(typeof contract)
console.log(contract);

async function main() {
  try {
    console.log("Contract:", contract);
    const testCode = await genrateScript.genrateScript(contract);
    console.log(testCode);


    // fs.writeFileSync("./testScript.js", testCode);
  } catch (error) {
    console.log(error);
    console.log("not getting the right ans");
  }
}

main();
