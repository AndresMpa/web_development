const readline = require("readline").createInterface({
  output: process.stdout,
  input: process.stdin,
});

let rps = {
  1: ["rock", 3],
  2: ["paper", 1],
  3: ["scissors", 2],
};

console.log(`
  Hi, this is a rock, paper, scissors game:

  These are the options:
  1) Rock
  2) Paper
  3) Scissors
`);

let winner = (select) => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(`
  System choose: ${rps[randomNumber][0]}
  You choose: ${rps[select][0]}
  `);

  switch (true) {
    case rps[randomNumber][1] === rps[select][1]:
      console.log("Draw");
      break;
    case rps[randomNumber][1] == parseInt(select):
      console.log("You lose...");
      break;
    case rps[select][1] === randomNumber:
      console.log("You win!");
      break;
    default:
      console.log(`${select} is not an option`);
  }
};

readline.question("Choose something: ", (select) => {
  winner(select);
  readline.close();
});
