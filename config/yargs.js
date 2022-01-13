const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Base of calculate'
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: 'Show result'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "The base should be a number";
    }
    return true;
  }).argv;

module.exports = argv;
