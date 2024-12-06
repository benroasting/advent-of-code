const path = require("path");
const inputArray = require("../inputArray");

const inputFile = path.resolve(__dirname, "input.txt");
const data = inputArray(inputFile);

function winCon(oppMove, myMove) {
  if (oppMove === "A" && myMove === "Y") {
    return 6;
  }
  if (oppMove === "A" && myMove === "X") {
    return 3;
  }
  if (oppMove === "A" && myMove === "Z") {
    return 0;
  }
  if (oppMove === "B" && myMove === "Z") {
    return 6;
  }
  if (oppMove === "B" && myMove === "Y") {
    return 3;
  }
  if (oppMove === "B" && myMove === "X") {
    return 0;
  }
  if (oppMove === "C" && myMove === "X") {
    return 6;
  }
  if (oppMove === "C" && myMove === "Z") {
    return 3;
  }
  if (oppMove === "C" && myMove === "Y") {
    return 0;
  }
}

function pointsFromMove(myMove) {
  if (myMove === "Y") {
    return 2;
  }
  if (myMove === "X") {
    return 1;
  }
  if (myMove === "Z") {
    return 3;
  }
}

function partOne() {
  let finalScore = 0;

  for (let i = 0; i < data.length; i++) {
    const moves = data[i].split(" ");
    const oppMove = moves[0];
    const moveStrat = moves[1];
    const myMove = moves[1];
    const result = winCon(oppMove, myMove);
    const movePoint = pointsFromMove(myMove);
    finalScore += result;
    finalScore += movePoint;
  }
  console.log(finalScore);
}

partOne();

function strategy(oppMove, moveStrat) {
  let myMove;
  if (oppMove === "A" && moveStrat === "Y") {
    myMove = "X";
  }
  if (oppMove === "A" && moveStrat === "X") {
    myMove = "Z";
  }
  if (oppMove === "A" && moveStrat === "Z") {
    myMove = "Y";
  }
  if (oppMove === "B" && moveStrat === "Y") {
    myMove = "Y";
  }
  if (oppMove === "B" && moveStrat === "X") {
    myMove = "X";
  }
  if (oppMove === "B" && moveStrat === "Z") {
    myMove = "Z";
  }
  if (oppMove === "C" && moveStrat === "Y") {
    myMove = "Z";
  }
  if (oppMove === "C" && moveStrat === "X") {
    myMove = "Y";
  }
  if (oppMove === "C" && moveStrat === "Z") {
    myMove = "X";
  }
  return myMove;
}

function partTwo() {
  let finalScore = 0;

  for (let i = 0; i < data.length; i++) {
    const moves = data[i].split(" ");
    const oppMove = moves[0];
    const moveStrat = moves[1];
    const myMove = strategy(oppMove, moveStrat);
    const result = winCon(oppMove, myMove);
    const movePoint = pointsFromMove(myMove);
    finalScore += result;
    finalScore += movePoint;
  }
  console.log(finalScore);
}

partTwo();
