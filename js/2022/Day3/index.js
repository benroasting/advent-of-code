// separate each line -- is list of all items in rucksack

function partOne(data) {
  let sum = 0;
  let sharedItem = [];
  for (let i = 0; i < data.length; i++) {
    // divide each line in half
    const half = data[i].length / 2;

    const firstHalf = data[i].slice(0, half);
    const secondHalf = data[i].slice(half);
    // compare the two halves to find the matching letter
    for (let j = 0; j < firstHalf.length; j++) {
      if (secondHalf.includes(firstHalf[j])) {
        sharedItem.push(firstHalf[j]);
        break;
      }
    }
  }

  // find priority of the matching letter for each line
  // find sum of all the letters

  for (let k = 0; k < sharedItem.length; k++) {
    if (sharedItem[k] === sharedItem[k].toUpperCase()) {
      sum += sharedItem[k].charCodeAt() - 38;
    } else {
      sum += sharedItem[k].charCodeAt() - 96;
    }
  }
  return sum;
}

// function common(string1, string2) {
//   let sharedItem = [];
//   for (let i = 0; i < string1.length; i++) {
//     if (string2.includes(string1[i])) {
//       sharedItem.push(string1[i]);
//       break;
//     }
//   }
// }

function partTwo(data) {
  let sum = 0;
  let uniqueBadge = [];
  const newGroup = groupByThree(data);

  for (let i = 0; i < newGroup.length; i++) {
    const firstElf = newGroup[i][0];
    const secondElf = newGroup[i][1];
    const thirdElf = newGroup[i][2];
    const blackList = [];
    const splittedFirstElf = firstElf.split("");

    splittedFirstElf.forEach((letter) => {
      if (
        secondElf.includes(letter) &&
        thirdElf.includes(letter) &&
        !blackList.includes(letter)
      ) {
        blackList.push(letter);
      }
    });
    uniqueBadge.push(blackList[0]);
  }

  for (let k = 0; k < uniqueBadge.length; k++) {
    if (uniqueBadge[k] === uniqueBadge[k].toUpperCase()) {
      sum += uniqueBadge[k].charCodeAt() - 38;
    } else {
      sum += uniqueBadge[k].charCodeAt() - 96;
    }
  }
  return sum;
}

function groupByThree(data) {
  const groups = [];
  for (let i = 0; i < data.length; i += 3) {
    groups.push(data.slice(i, i + 3));
  }
  return groups;
}

module.exports = { partOne, partTwo };
