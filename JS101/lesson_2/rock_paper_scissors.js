const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    return "player";
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
  (choice === 'paper' && computerChoice === 'scissors') ||
  (choice === 'scissors' && computerChoice === 'rock')) {
    return "computer";
  } else {
    return "tie";
  }
}

let continuePlay = true;
while (continuePlay) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  // 1. Math.floor - The Math.floor() static method always rounds down and
  // returns the largest integer less than or equal to a given number.
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  // 2. Math.ceil - The Math.ceil() static method always rounds up and
  // returns the smallest integer greater than or equal to a given number.
  // let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length) - 1;
  // 3. Math.round = The Math.round() static method returns the value of a
  // number rounded to the nearest integer.
  // let randomIndex = Math.round(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  const winner = displayWinner(choice, computerChoice);
  switch (winner) {
    case "player":
      prompt("You win!");
      break;
    case "computer":
      prompt("Computer wins!");
      break;
    case "tie":
      prompt("It's a tie!");
      break;
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer && answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    continuePlay = false;
  }
}