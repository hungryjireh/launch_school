const readline = require('readline-sync');
const CALCULATOR_MESSAGES = require('./calculator_messages.json');

// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumber(language) {
  let number = readline.question();
  while (invalidNumber(number)) {
    prompt(CALCULATOR_MESSAGES[language].getNumberError);
    number = readline.question();
  }
  return number;
}

function operationResult(number1, number2, operation) {
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  return output;
}

function calculator(language) {
  prompt(CALCULATOR_MESSAGES[language].getFirstNumber);
  const number1 = getNumber(language);

  prompt(CALCULATOR_MESSAGES[language].getSecondNumber);
  const number2 = getNumber(language);

  prompt(CALCULATOR_MESSAGES[language].getOperation);
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(CALCULATOR_MESSAGES.language.getOperationError);
    operation = readline.question();
  }

  const output = operationResult(number1, number2, operation);
  prompt(`${CALCULATOR_MESSAGES[language].result} ${output}.`);
}

prompt(CALCULATOR_MESSAGES.getLanguage);
let language = readline.question();
while (!['1', '2'].includes(language)) {
  prompt(CALCULATOR_MESSAGES.getLanguageError);
  language = readline.question();
}

prompt(CALCULATOR_MESSAGES[language].welcomeMessage);
let continueCalculator = true;
while (continueCalculator) {
  calculator(language);

  prompt(CALCULATOR_MESSAGES[language].performAnotherCalculation);
  let checkContinueCalculator = readline.question();
  if (checkContinueCalculator && !['yes', 'y'].includes(checkContinueCalculator.toLowerCase())) {
    continueCalculator = false;
  }
}
