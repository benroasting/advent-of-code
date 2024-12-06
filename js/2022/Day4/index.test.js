const { partOne, partTwo } = require(".");
const path = require("path");
const inputArray = require("../inputArray");
const realFile = path.resolve(__dirname, "input.txt");
const realData = inputArray(realFile);
const sample = path.resolve(__dirname, "sample.txt");
const sampleData = inputArray(sample);

describe("partOne", () => {
  it("works", () => {
    // expect(parseLine("2-4,6-8")).toEqual([
    //   { start: 2, end: 4 },
    //   { start: 6, end: 8 },
    // ]);
    expect(partOne(sampleData)).toEqual(2);
    expect(partOne(realData)).toEqual(511);
  });
});

describe("partTwo", () => {
  it("works", () => {
    expect(partTwo(sampleData)).toEqual(4);
    expect(partTwo(realData)).toEqual(821);
  });
});
