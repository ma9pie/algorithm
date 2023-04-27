const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : ``
).split("\n");

console.log(stdin[0]+"??!");