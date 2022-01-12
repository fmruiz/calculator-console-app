const { createTable } = require("./helpers/multiplier");

console.clear();

// vars
let base = 5;
// call create table
createTable(base)
  .then((filename) => console.log(filename, "created"))
  .catch((error) => console.log(error));
