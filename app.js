const { createTable } = require("./helpers/multiplier");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "The base should be a number";
    }
    return true;
  })
  .argv;

console.clear();

// call create table
createTable(argv.b, argv.l)
  .then((filename) => console.log(filename, "created"))
  .catch((error) => console.log(error));
