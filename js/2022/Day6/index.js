const path = require("path");
const inputArray = require("../inputArray");
const sample = path.resolve(__dirname, "sample.txt");
const sampleData = inputArray(sample)[0];
const realFile = path.resolve(__dirname, "input.txt");
const realData = inputArray(realFile)[0];

function partOne() {
  const array = realData.split("");
  for (let i = 3; i < array.length; i++) {
    let arrayOfFour = [array[i], array[i - 1], array[i - 2], array[i - 3]];
    if (!containsDuplicates(arrayOfFour)) {
      return i + 1;
    }
  }
}
partOne();

function containsDuplicates(array) {
  const unique = new Set(array);
  return unique.size !== array.length;
}

function partTwo() {
  const array = realData.split("");
  for (let i = 13; i < array.length; i++) {
    let arrayOfFour = [
      array[i],
      array[i - 1],
      array[i - 2],
      array[i - 3],
      array[i - 4],
      array[i - 5],
      array[i - 6],
      array[i - 7],
      array[i - 8],
      array[i - 9],
      array[i - 10],
      array[i - 11],
      array[i - 12],
      array[i - 13],
    ];
    if (!containsDuplicates(arrayOfFour)) {
      return i + 1;
    }
  }
}

module.exports = { partOne, partTwo, containsDuplicates };
