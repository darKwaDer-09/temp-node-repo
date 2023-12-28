const { log } = require("console");
const { readFileSync, writeFileSync } = require("fs");
// provide path and encoding
console.log('start');
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
//filename(if file not present then node will create one),value to be passed, if you need to append

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log('done with the task');
console.log('starting the next one');