const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [first, second] = input.map((e) => Number(e));
String(second)
  .split("")
  .reverse()
  .map((e) => {
    console.log(first * +e);
  });
console.log(first * second);
