const readline = require('readline-sync');

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const LIZARD = "lizard";
const SPOCK = "spock";
const VALID_CHOICES = [ROCK, PAPER, SCISSORS, LIZARD, SPOCK];

const ROCK_SHORTENED = "r";
const PAPER_SHORTENED = "p";
const SCISSORS_SHORTENED = "sc";
const LIZARD_SHORTENED = "l";
const SPOCK_SHORTENED = "sp";
const VALID_SHORTENED_CHOICES = [ROCK_SHORTENED, PAPER_SHORTENED,
  SCISSORS_SHORTENED, LIZARD_SHORTENED, SPOCK_SHORTENED];
const SHORTENED_CHOICES_MAP = {
  r: ROCK,
  p: PAPER,
  sc: SCISSORS,
  l: LIZARD,
  sp: SPOCK
};

const PLAYER = "player";
const COMPUTER = "computer";
const TIE = "tie";

let SCORE = {
  player: 0,
  computer: 0
};

const WINNER_COMBOS = {
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
  const displayChoiceInputs = VALID_CHOICES.map((choice, index) => `${choice}|${VALID_SHORTENED_CHOICES[index]}`);
  prompt(`Choose one: ${displayChoiceInputs.join(", ")}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice) &&
    !VALID_SHORTENED_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }

  if (VALID_SHORTENED_CHOICES.includes(choice)) {
    choice = SHORTENED_CHOICES_MAP[choice];
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

function displayGrandWinner(winner) {
  switch (winner) {
    case PLAYER:
      prompt('You are the grand winner!');
      break;
    case COMPUTER:
      prompt('Computer is the grand winner!');
      break;
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
    const winnerValuesForPlayer = WINNER_COMBOS[choice];
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

  const playerWins = SCORE[PLAYER] === 3;
  const computerWins = SCORE[COMPUTER] === 3;
  if (playerWins || computerWins) {
    displayGrandWinner(winner);
    resetScore();
  }
}

function runProgram() {
  console.clear();
  while (true) {
    playRockPaperScissors();

    const playAgainAnswer = getPlayAgainAnswer();
    if (playAgainAnswer[0] !== 'y') break;
  }
}

runProgram();