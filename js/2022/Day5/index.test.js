const { partOne, partTwo, Instruction } = require(".");
const path = require("path");
const inputArray = require("../inputArray");
const realFile = path.resolve(__dirname, "input.txt");
const realData = inputArray(realFile);
const sampleFile = path.resolve(__dirname, "sample.txt");
const sampleData = inputArray(sampleFile);

let sampleStack = {
  1: ["Z", "N"],
  2: ["M", "C", "D"],
  3: ["P"],
};

let dataStack = {
  1: ["R", "G", "H", "Q", "S", "B", "T", "N"],
  2: ["H", "S", "F", "D", "P", "Z", "J"],
  3: ["Z", "H", "V"],
  4: ["M", "Z", "J", "F", "G", "H"],
  5: ["T", "Z", "C", "D", "L", "M", "S", "R"],
  6: ["M", "T", "W", "V", "H", "Z", "J"],
  7: ["T", "F", "P", "L", "Z"],
  8: ["Q", "V", "W", "S"],
  9: ["W", "H", "L", "M", "T", "D", "N", "C"],
};

// describe("partOne", () => {
//   it("works", () => {
//     expect(partOne(sampleStack, sampleData)).toEqual("CMZ");
//     expect(partOne(dataStack, realData)).toEqual("PTWLTDSJV");
//   });
//   it("parses", () => {
//     const instruction = new Instruction("move 1 from 2 to 1");

//     expect(instruction.count).toEqual(1);
//     expect(instruction.from).toEqual(2);
//     expect(instruction.to).toEqual(1);
//   });
// });

describe("partTwo", () => {
  it("works", () => {
    expect(partTwo(sampleStack, sampleData)).toEqual("MCD");
    expect(partTwo(dataStack, realData)).toEqual("");
  });
});
