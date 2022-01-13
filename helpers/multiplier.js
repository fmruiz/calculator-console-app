const fs = require("fs");
const colors = require('colors');

// multiplier fn
async function createTable(base = 5, list) {
  try {
    console.log("--------------------".green);
    console.log("Calculator".green);
    console.log("--------------------".green);

    let output = "";
    // calculate multipliers
    for (let index = 1; index <= 10; index++) {
      output += `${base} x ${index} = ${base * index}\n`;
    }
    // create and write file
    fs.writeFileSync(`result-base-${base}.txt`, output);

    // show result of calculate
    list ? console.log(output) : null;

    return `result-base-${base}.txt`;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createTable,
};
