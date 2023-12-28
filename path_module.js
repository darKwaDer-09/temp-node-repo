const { log } = require("console");
const path = require("path");
console.log(path.sep);
//platform specific separator

const filePath = path.join("/content", "subfolder", "text.txt");
const base = path.basename(filePath);
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
