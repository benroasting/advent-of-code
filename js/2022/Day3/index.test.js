const { partOne, partTwo } = require(".");
const path = require("path");
const inputArray = require("../inputArray");
const realFile = path.resolve(__dirname, "input.txt");
const realData = inputArray(realFile);
const sample = path.resolve(__dirname, "sample.txt");
const sampleData = inputArray(sample);

describe("partOne", () => {
  it("works", () => {
    expect(partOne(sampleData)).toEqual(27);
    expect(partOne(realData)).toEqual(8039);
  });
});

describe("partTwo", () => {
  it("works", () => {
    expect(partTwo(sampleData)).toEqual(70);
    expect(partTwo(realData)).toEqual(0);
  });
});
