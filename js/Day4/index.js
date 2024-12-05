let fs = require("fs");
const path = require("path");

const realDataFile = path.resolve(__dirname, "input.txt");
const sampleDataFile = path.resolve(__dirname, "sample.txt");

let input = fs.readFileSync(realDataFile).toString().trim().split("\n");

console.log("🚀 ~ input:", input);
let word_puzzle = [];

function puzzle(input) {
  for (let i = 0; i < input.length; i++) {
    let puzzle_rows = [];
    let row = input[i];

    for (let j = 0; j < row.length; j++) {
      let cell = row[j];
      puzzle_rows.push(cell);
    }
    word_puzzle.push(puzzle_rows);
  }
}

puzzle(input);

// part 1
function solve(word) {
  let foundThisManyTimes = 0;
  function checkDirection(y, x, directionY, directionX) {
    let currentCheck = "";
    let pos = [];

    try {
      for (let i = 0; i < word.length; i++) {
        let newY = y + i * directionY;
        let newX = x + i * directionX;

        if (
          newY < 0 ||
          newY >= word_puzzle.length || // Check row bounds
          newX < 0 ||
          newX >= word_puzzle[0].length // Check column bounds
        ) {
          return null; // Out of bounds, stop checking this direction
        }
        currentCheck += word_puzzle[newY][newX];
        pos.push([newY][newX]);
      }
      if (currentCheck === word) {
        return pos;
      }
    } catch (e) {
      console.log("Error:", e);
    }

    return null;
  }

  for (let y = 0; y < word_puzzle.length; y++) {
    for (let x = 0; x < word_puzzle[y].length; x++) {
      let directions = [
        [0, 1], // right
        [0, -1], // left
        [-1, 0], // up
        [-1, 1], // up-right
        [-1, -1], // up-left
        [1, 0], // down
        [1, 1], // down-right
        [1, -1], // down-left
      ];

      for (let [directionY, directionX] of directions) {
        let found = checkDirection(y, x, directionY, directionX);
        if (found) ++foundThisManyTimes;
      }
    }
  }

  return foundThisManyTimes;

  // sample should equal 18
  // real should equal 2547
}

function checkDirection(startY, startX) {
  let matchedPostions = [];
  console.log(`Checking pattern starting at (${startY}, ${startX})`);

  for (let y = 0; y < patternHeight; y++) {
    for (let x = 0; x < patternWidth; x++) {
      let puzzleY = startY + y;
      let puzzleX = startX + x;

      if (
        puzzleY >= word_puzzle.length || // Check row bounds
        puzzleX >= word_puzzle[0].length // Check column bounds
      ) {
        console.log(`Out of bounds at (${puzzleY}, ${puzzleX})`);
        return null; //
      }

      const puzzleChar = word_puzzle[puzzleY][puzzleX];
      const patternChar = pattern[y][x];

      if (patternChar !== wildcard && patternChar !== puzzleChar) {
        return null;
      }

      matchedPostions.push([puzzleY, puzzleX]);
    }
  }
  for (let pos of matchedPostions) {
    const posKey = `${pos[0]},${pos[1]}`;
    if (visitedPositions.has(posKey)) {
      return null;
    }

    for (let pos of matchedPostions) {
      const posKey = `${pos[0]},${pos[1]}`;
      visitedPositions.add(posKey);
    }
  }
  console.log(`Pattern matched at starting position (${startY}, ${startX})`);
  return matchedPostions;
}

const safeGridGet = (grid, rowIdx, colIdx) => grid[rowIdx]?.[colIdx];

//   different solution

function solvePattern2(input) {
  let count = 0;

  for (let r = 0; r < input.length; r++) {
    for (let c = 0; c < input[0].length; c++) {
      if (input[r][c] === "A") {
        /**
         * M . M
         * . A .
         * S . S
         */
        if (
          safeGridGet(input, r - 1, c - 1) === "M" &&
          safeGridGet(input, r - 1, c + 1) === "M" &&
          safeGridGet(input, r + 1, c - 1) === "S" &&
          safeGridGet(input, r + 1, c + 1) === "S"
        ) {
          count++;
        }

        /**
         * S . S
         * . A .
         * M . M
         */
        if (
          safeGridGet(input, r - 1, c - 1) === "S" &&
          safeGridGet(input, r - 1, c + 1) === "S" &&
          safeGridGet(input, r + 1, c - 1) === "M" &&
          safeGridGet(input, r + 1, c + 1) === "M"
        ) {
          count++;
        }

        /**
         * S . M
         * . A .
         * S . M
         */
        if (
          safeGridGet(input, r - 1, c - 1) === "S" &&
          safeGridGet(input, r - 1, c + 1) === "M" &&
          safeGridGet(input, r + 1, c - 1) === "S" &&
          safeGridGet(input, r + 1, c + 1) === "M"
        ) {
          count++;
        }

        /**
         * M . S
         * . A .
         * M . S
         */
        if (
          safeGridGet(input, r - 1, c - 1) === "M" &&
          safeGridGet(input, r - 1, c + 1) === "S" &&
          safeGridGet(input, r + 1, c - 1) === "M" &&
          safeGridGet(input, r + 1, c + 1) === "S"
        ) {
          count++;
        }
      }
    }
  }
  console.log("🚀 ~ solvePattern2 ~ count", count);
  return count;
}

solvePattern2(input);
// part 2
function solvePattern(pattern, wildcard) {
  let patternHeight = pattern.length;
  let patternWidth = pattern[0].length;
  let foundThisManyTimes = [];
  let visitedPositions = new Set();

  for (let startY = 0; startY <= word_puzzle.length - patternHeight; startY++) {
    for (
      let startX = 0;
      startX <= word_puzzle[startY].length - patternWidth;
      startX++
    ) {
      let match = checkDirection(startY, startX);
      if (match) {
        let matchKey = match.map((pos) => pos.join(",")).join(";");
        if (!visitedPositions.has(matchKey)) {
          visitedPositions.add(matchKey);
          foundThisManyTimes.push(match);
        }
      }
    }
  }

  if (foundThisManyTimes.length > 0) {
    return foundThisManyTimes.length;
  } else {
    console.log("Pattern not found.");
    return null;
  }

  // sample should equal 18
  // real should equal 2547
}

let pattern = [
  ["M", "*", "S"],
  ["*", "A", "*"],
  ["M", "*", "S"],
];

let wildcard = "*";

// console.log("🚀 ~ solvePattern(pattern):", solvePattern(pattern, wildcard));

// solve("XMAS");
