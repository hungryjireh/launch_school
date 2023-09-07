const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getNumber(message) {
  prompt(`${message}`);
  let input = readline.question();
  while (invalidNumber(input)) {
    prompt('Please enter a positive number.');
    input = readline.question();
  }
  return Number(input);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || Number(number) <= 0;
}

const loanAmount = getNumber('Enter loan amount: ');
const annualPercentageRate = getNumber('Enter annual percentage rate (eg. 5 -> 5%): ');
const loanDurationInMonths = getNumber('Enter loan duration in months: ');

const monthlyInterestRate = annualPercentageRate / (12 * 100);

const monthlyPayment = loanAmount *
  (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));
prompt(`Monthly payment is $${monthlyPayment.toFixed(2)}`);
