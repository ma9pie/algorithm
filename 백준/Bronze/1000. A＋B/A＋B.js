const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : ``
).split("\n");

const [a,b] = stdin[0].split(" ")


console.log((+a)+(+b));