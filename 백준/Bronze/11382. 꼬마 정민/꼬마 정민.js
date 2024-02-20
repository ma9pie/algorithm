const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

const res = input.reduce((acc, cur) => {
  return +acc + +cur;
});
console.log(res);