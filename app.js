const fs = require("fs");

console.clear();
console.log("--------------------");
console.log("Calculator");
console.log("--------------------");

// vars
let base = 5;
let output = "";

// calculate multipliers
for (let index = 1; index <= 10; index++) {
  output += `${base} x ${index} = ${base * index}\n`;
}

// create and write file
fs.writeFile(`result-base-${base}.txt`, output, (error) => {
  if (error) throw error;
  console.log("Success!!");
});
