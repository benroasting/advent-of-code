let fs = require("fs");
const path = require("path");

const realDataFile = path.resolve(__dirname, "input.txt");
const sampleDataFile = path.resolve(__dirname, "sample.txt");

let input = fs.readFileSync(realDataFile).toString();

const notBlank = (x) => x != "";

const parseInput = (input) => {
  const [pageOrderingRulesText, pagesToProducedText] = input.split("\n\n");

  const pageOrderingRules = pageOrderingRulesText
    .split("\n")
    .filter(notBlank)
    .map((line) => line.split("|").map((x) => parseInt(x)));

  const pagesToProduced = pagesToProducedText
    .split("\n")
    .filter(notBlank)
    .map((line) => line.split(",").map((x) => parseInt(x)));

  return { pageOrderingRules, pagesToProduced };
};

const isInOrder = (listOfPages, pageOrderingRules) => {
  pageOrderingRules.every((orderingRule) => {
    const indices = orderingRule.map((page) => listOfPages.indexOf(page));
    if (indices.filter((x) => x === -1).length > 0) return true;

    return indices[0] < indices[1];
  });
};
