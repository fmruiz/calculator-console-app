console.clear();
console.log("--------------------");
console.log("Calculator");
console.log("--------------------");

let base = 5;
let output = "";

for (let index = 1; index <= 10; index++) {
  output += `${base} x ${index} = ${base * index}\n`;
}

console.log(output);
