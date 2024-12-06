const { partOne, partTwo, containsDuplicates } = require(".");
const path = require("path");
const inputArray = require("../inputArray");
const realFile = path.resolve(__dirname, "input.txt");
const realData = inputArray(realFile);
const sample = path.resolve(__dirname, "sample.txt");
const sampleData = inputArray(sample);

describe("partOne", () => {
  it("works", () => {
    expect(partOne(sampleData)).toEqual(7);
    expect(partOne(realData)).toEqual(0);
  });
});

describe("containsDuplicates", () => {
  it("works", () => {
    expect(containsDuplicates(["a", "a", "b"])).toBe(true);
  });
  it("works", () => {
    expect(containsDuplicates(["a", "b", "c"])).toBe(false);
  });
});

describe("partTwo", () => {
  it("works", () => {
    expect(partTwo(sampleData)).toEqual(19);
    expect(partTwo(realData)).toEqual(0);
  });
});
