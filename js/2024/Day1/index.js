let fs = require("fs");
const path = require("path");

const realDataFile = path.resolve(__dirname, "input.txt");
const sampleDataFile = path.resolve(__dirname, "sample.txt");

let input = fs.readFileSync(realDataFile).toString().split("\n");

// put the input into an array
let lines = input
  .map((line) => line.split(" ").filter((x) => x !== ""))
  .filter((line) => line.length > 0);
console.log("🚀 ~  lines:", lines);

// Sort the columns
let left = lines.map((line) => line[0]).sort((a, b) => a - b);
console.log("🚀 ~ left:", left);

let right = lines.map((line) => line[1]).sort((a, b) => a - b);
console.log("🚀 ~ right:", right);

// ------------- Define Answer Variables -------------
part_1 = 0;
part_2 = 0;

// ------------- Part 1 Solution -------------

for (let i = 0; i < left.length; i++) {
  part_1 += Math.abs(left[i] - right[i]);
}
console.log("🚀 ~ part_1:", part_1);

// ------------- Part 2 Solution -------------

for (let i = 0; i < left.length; i++) {
  let count = 0;
  for (let j = 0; j < left.length; j++) {
    if (left[i] === right[j]) {
      part_2 += Number(left[i]);
    }
  }
  count = 0;
}
console.log("🚀 ~ part_2:", part_2);

module.exports = {
  realDataFile,
  sampleDataFile,
  input,
  lines,
  left,
  right,
};
