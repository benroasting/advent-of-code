const fs = require("fs");

function inputArray(filePath) {
  const data = fs.readFileSync(filePath, "utf-8");
  return data.trim().split("\n");
}

module.exports = inputArray;
