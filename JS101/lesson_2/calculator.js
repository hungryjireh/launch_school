const readline = require('readline-sync');
const CALCULATOR_MESSAGES = require('./calculator_messages.json');

// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const LANGUAGES = {
  1: 'en',
  2: 'cn'
};

const ADD = 'add';
const SUBTRACT = 'subtract';
const MULTIPLY = 'multiply';
const DIVIDE = 'divide';

const OPERATORS = {
  1: ADD,
  2: SUBTRACT,
  3: MULTIPLY,
  4: DIVIDE
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumber(language, order) {
  switch (order) {
    case '1':
      prompt(CALCULATOR_MESSAGES[language].getFirstNumber);
      break;
    case '2':
      prompt(CALCULATOR_MESSAGES[language].getSecondNumber);
      break;
  }

  let number = readline.question();
  while (invalidNumber(number)) {
    prompt(CALCULATOR_MESSAGES[language].getNumberError);
    number = readline.question();
  }
  return number;
}

function isValidLanguage(language) {
  return Object.keys(LANGUAGES).includes(language);
}

function getLanguage() {
  prompt(CALCULATOR_MESSAGES.getLanguage);
  let language = readline.question();

  while (!isValidLanguage(language)) {
    prompt(CALCULATOR_MESSAGES.getLanguageError);
    language = readline.question();
  }

  return LANGUAGES[language];
}

function isValidOperator(operator) {
  return Object.keys(OPERATORS).includes(operator);
}

function getOperator(language) {
  prompt(CALCULATOR_MESSAGES[language].getOperation);
  let operator = readline.question();
  while (!isValidOperator(operator)) {
    prompt(CALCULATOR_MESSAGES[language].getOperationError);
    operator = readline.question();
  }

  return OPERATORS[operator];
}

function isValidYesNoInput(answer, type) {
  switch (type) {
    case 'yes':
      return answer[0] === 'y' || answer === 'yes';
    case 'no':
      return answer[0] === 'n' || answer === 'no';
  }
  return null;
}

function getContinueCalculation(language) {
  prompt(CALCULATOR_MESSAGES[language].performAnotherCalculation);
  let answer = readline.question().toLowerCase();

  while (!isValidYesNoInput(answer, 'yes') && !isValidYesNoInput(answer, 'no')) {
    prompt('Please enter "y"|"yes" or "n"|"no".');
    answer = readline.question().toLowerCase();
  }
  return isValidYesNoInput(answer, 'yes');
}

function displayResult(language, number1, number2, operation) {
  let output;
  switch (operation) {
    case ADD:
      output = Number(number1) + Number(number2);
      break;
    case SUBTRACT:
      output = Number(number1) - Number(number2);
      break;
    case MULTIPLY:
      output = Number(number1) * Number(number2);
      break;
    case DIVIDE:
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${CALCULATOR_MESSAGES[language].result} ${output}.`);
}

function calculator(language) {
  const number1 = getNumber(language, '1');
  const number2 = getNumber(language, '2');
  const operator = getOperator(language);

  displayResult(language, number1, number2, operator);
}

function runProgram() {
  console.clear();
  const language = getLanguage();

  prompt(CALCULATOR_MESSAGES[language].welcomeMessage);

  while (true) {
    calculator(language);

    const continueCalculation = getContinueCalculation(language);
    if (!continueCalculation) {
      break;
    } else {
      console.clear();
    }
  }
}

runProgram();
