const chalk = require("chalk");
// import chalk from "chalk";

console.log(
  chalk.green("success"),
  chalk.yellow("warning"),
  chalk.red("err!!")
);
console.log(chalk.bgCyanBright.yellow.bold("Hello world!"));
console.log(chalk.bold.underline.green("bold green"));
