let fs = require("fs");
const path = require("path");

const realDataFile = path.resolve(__dirname, "input.txt");
const sampleDataFile = path.resolve(__dirname, "sample.txt");

let input = fs.readFileSync(realDataFile).toString().split("\n");

// put the input into an array
let lines = input
  .map((line) => line.split(" ").filter((x) => x !== ""))
  .filter((line) => line.length > 0)
  .map((array) => array.map((s) => parseInt(s)));
console.log("🚀 ~  lines:", lines);

// ------------- Part 1 Solution -------------

function isSafe(reportData) {
  let increasing;
  for (let i = 1; i < reportData.length; i++) {
    const checkValues = reportData[i - 1] - reportData[i];
    const checkValuesAbsolute = Math.abs(checkValues);
    if (checkValuesAbsolute < 1 || checkValuesAbsolute > 3)
      return { result: false, idx: i };
    if (i === 1) {
      increasing = checkValues > 0;
    } else {
      if (increasing && checkValues < 0) return { result: false, idx: i };
      if (!increasing && checkValues > 0) return { result: false, idx: i };
    }
  }
  return { result: true, idx: 0 };
}

let safeReports1 = 0;
for (let j = 0; j < lines.length; j++) {
  if (isSafe(lines[j]).result) safeReports1++;
}
console.log("Part1: #Safe Reports = " + safeReports1);

// ------------- Part 2 Solution -------------

function getArrayWithoutElementAt(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1, array.length)];
}

let safeReports2 = 0;

for (let j = 0; j < lines.length; j++) {
  const report = lines[j];
  const check = isSafe(report);
  if (check.result) {
    safeReports2++;
    continue;
  }
  // If there's a problem, we need to check several places for removal
  const indexesToCheck = [
    check.idx - 2,
    check.idx - 1,
    check.idx,
    check.idx + 1,
    check.idx + 2,
  ].filter((idx) => idx >= 0 && idx < report.length);
  for (let i = 0; i < indexesToCheck.length; i++) {
    const idx = indexesToCheck[i];
    const reportWithoutIdx = getArrayWithoutElementAt(report, idx);
    if (isSafe(reportWithoutIdx).result) {
      safeReports2++;
      break;
    }
  }
}
console.log("Part2: #Safe Reports = " + safeReports2);
