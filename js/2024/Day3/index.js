let fs = require("fs");
const path = require("path");

const realDataFile = path.resolve(__dirname, "input.txt");
const sampleDataFile = path.resolve(__dirname, "sample.txt");

let input = fs.readFileSync(realDataFile).toString();

// parse the string into an array

function parseMemory(input) {
  let total = 0;
  const memory = input;
  const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const matches = memory.match(pattern);

  matches.map((match) => {
    const [a, b] = match.match(/\d{1,3}/g);
    total += a * b;
  });

  //   sample total = 161
  //   real total = 175015740
}

function enabledMulMemory(input) {
  let sumTotal = 0;
  const memory = input;
  const pattern = /(do\(\)|don't\(\)|mul\((\d{1,3}),(\d{1,3})\))/g;
  let enabled = true;

  const matches = memory.match(pattern);
  matches.map((match) => {
    const doMatch = match.match(/do\(\)/);
    const dontMatch = match.match(/don't\(\)/);
    const mulMatch = match.match(/mul\((\d{1,3}),(\d{1,3})\)/);

    if (doMatch) {
      enabled = true;
    } else if (dontMatch) {
      enabled = false;
    } else if (enabled && mulMatch) {
      const [a, b] = mulMatch.slice(1);
      sumTotal += a * b;
    }
  });
  return sumTotal;
  //   sample total = 48
  //   real total = 112272912
}

parseMemory(input);
enabledMulMemory(input);
