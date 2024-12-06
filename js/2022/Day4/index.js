// big list of the section assignments for each pair
function partOne(realData) {
  let result = 0;
  const ranges = realData.map((line) =>
    line
      .split(",")
      .map((numberRange) => numberRange.split("-").map((num) => parseInt(num)))
  );
  ranges.forEach((coordinateSet) => {
    let [A, B] = coordinateSet[0];
    let [X, Y] = coordinateSet[1];

    if ((A <= X && B >= Y) || (A >= X && B <= Y)) {
      result += 1;
    }
  });
  return result;
}

// function parseLine(input) {
//   const [first, second] = input.split(",");
//   const [el1, el2] = first.split("-");
//   const [el3, el4] = second.split("-");

//   return [
//     { start: parseInt(el1), end: parseInt(el2) },
//     { start: parseInt(el3), end: parseInt(el4) },
//   ];
// }

function partTwo(sampleData) {
  let result = 0;
  const ranges = sampleData.map((line) =>
    line
      .split(",")
      .map((numberRange) => numberRange.split("-").map((num) => parseInt(num)))
  );
  ranges.forEach((coordinateSet) => {
    let [A, B] = coordinateSet[0];
    let [X, Y] = coordinateSet[1];

    if ((A < X && B < X) || (A > Y && B > Y)) {
      result += 0;
    } else {
      result += 1;
    }
  });
  return result;
}

module.exports = { partOne, partTwo };
