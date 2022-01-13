const { createTable } = require("./helpers/multiplier");
const argv = require("./config/yargs");

console.clear();

// call create table
createTable(argv.b, argv.l)
  .then((filename) => console.log(filename, "created"))
  .catch((error) => console.log(error));
