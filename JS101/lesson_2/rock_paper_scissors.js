const readline = require('readline-sync');

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const LIZARD = "lizard";
const SPOCK = "spock";
const VALID_CHOICES = [ROCK, PAPER, SCISSORS, LIZARD, SPOCK];

const PLAYER = "player";
const COMPUTER = "computer";
const TIE = "tie";

let SCORE = {
  player: 0,
  computer: 0
};

const WINNER_VALUES = {
  rock: [SCISSORS, LIZARD],
  paper: [ROCK, SPOCK],
  scissors: [PAPER, LIZARD],
  spock: [SCISSORS, ROCK],
  lizard: [SPOCK, PAPER]
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function getChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  return choice;
}

function getComputerChoice() {
  // 1. Math.floor - The Math.floor() static method always rounds down and
  // returns the largest integer less than or equal to a given number.
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  // 2. Math.ceil - The Math.ceil() static method always rounds up and
  // returns the smallest integer greater than or equal to a given number.
  // let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length) - 1;
  // 3. Math.round = The Math.round() static method returns the value of a
  // number rounded to the nearest integer.
  // let randomIndex = Math.round(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function displayWinner(winner) {
  switch (winner) {
    case PLAYER:
      prompt("You win!");
      break;
    case COMPUTER:
      prompt("Computer wins!");
      break;
    case TIE:
      prompt("It's a tie!");
      break;
  }
}

function updateAndDisplayScore(winner) {
  if ([PLAYER, COMPUTER].includes(winner)) {
    SCORE[winner] += 1;
  }
  prompt(`The score is: ${JSON.stringify(SCORE)}`);
}

function displayGrandWinner() {
  if (SCORE[PLAYER] === 3) {
    prompt('You are the grand winner!');
  } else if (SCORE[COMPUTER] === 3) {
    prompt('Computer is the grand winner!');
  }
}

function resetScore() {
  SCORE = {
    player: 0,
    computer: 0
  };
}

function getPlayAgainAnswer() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function getWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return TIE;
  } else {
    const winnerValuesForPlayer = WINNER_VALUES[choice];
    if (winnerValuesForPlayer.includes(computerChoice)) {
      return PLAYER;
    }
    return COMPUTER;
  }
}

function playRockPaperScissors() {
  const choice = getChoice();
  const computerChoice = getComputerChoice();

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  const winner = getWinner(choice, computerChoice);
  displayWinner(winner);
  updateAndDisplayScore(winner);

  if (SCORE[PLAYER] === 3 || SCORE[COMPUTER] === 3) {
    displayGrandWinner();
    resetScore();
  }
}

while (true) {
  playRockPaperScissors();

  const playAgainAnswer = getPlayAgainAnswer();
  if (playAgainAnswer[0] !== 'y') break;
}