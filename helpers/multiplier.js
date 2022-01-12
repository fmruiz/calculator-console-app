const fs = require("fs");

// multiplier fn
async function createTable(base = 5) {
  try {
    console.log("--------------------");
    console.log("Calculator");
    console.log("--------------------");

    let output = "";
    // calculate multipliers
    for (let index = 1; index <= 10; index++) {
      output += `${base} x ${index} = ${base * index}\n`;
    }
    // create and write file
    fs.writeFileSync(`result-base-${base}.txt`, output);

    return `result-base-${base}.txt`;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createTable,
};
