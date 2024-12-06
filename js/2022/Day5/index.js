class Instruction {
  constructor(input) {
    const [_1, count, _2, from, _3, to] = input.split(" ");

    this.count = parseInt(count);
    this.from = parseInt(from);
    this.to = parseInt(to);
  }
}

function partOne(crates, inputs) {
  const instructions = inputs.map((line) => new Instruction(line));
  instructions.forEach((instruction) => {
    for (let i = 0; i < instruction.count; i++) {
      const crate = crates[instruction.from].pop();
      if (!crate) {
        return;
      }
      crates[instruction.to].push(crate);
    }
  });
  const view = Object.values(crates).map((stack) => stack.slice(-1)[0]);
  return view.join("");
}

function partTwo(crates, inputs) {
  const instructions = inputs.map((line) => new Instruction(line));
  // const instructions = inputs
  //   .map((line) => line.replace(/(move|from|to)/g, "").trim())
  //   .map((line) => line.split("  ").map(Number));
  instructions.forEach((instruction) => {
    const crate = crates[instruction.from].splice(
      crates[instruction.from].length - instruction.count,
      instruction.count
    );
    crates[instruction.to].push(...crate);
    console.log(crates);
  });

  const view = Object.values(crates).map((stack) => stack.slice(-1)[0]);
  return view.join("");
}

module.exports = {
  Instruction,
  partOne,
  partTwo,
};
