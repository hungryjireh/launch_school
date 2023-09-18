/*
— problem: get two integers from user, then perform these operations:
  - addition, subtraction, product, quotient, remainder, and power
— examples: 23, 17 -> (1) 23 + 17 (2) 23 - 17 (3) 23 * 17
  (4) 23 / 17 (5) 23 % 17 (6) 23 ** 17
— input types: integer, integer
— expected output types: string
- rules: assume integer input without validation
— algo:
  - get input from user for first integer
  - get input from user for second integer
  - perform addition
  - perform subtraction
  - perform product
  - perform quotient
  - perform remainder
  - perform power
*/

function prompt(message) {
  console.log(`=> ${message}`);
}

function printAddition(num1, num2) {
  prompt(`${num1} + ${num2} = ${num1 + num2}`);
}

function printSubtraction(num1, num2) {
  prompt(`${num1} - ${num2} = ${num1 - num2}`);
}

function printProduct(num1, num2) {
  prompt(`${num1} * ${num2} = ${num1 * num2}`);
}

function printQuotient(num1, num2) {
  prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
}

function printRemainder(num1, num2) {
  prompt(`${num1} % ${num2} = ${num1 % num2}`);
}

function printPower(num1, num2) {
  prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
}

let readlineSync = require('readline-sync');

prompt('Enter the first number:');
const num1 = parseInt(readlineSync.prompt(), 10);

prompt('Enter the second number:');
const num2 = parseInt(readlineSync.prompt(), 10);

printAddition(num1, num2);
printSubtraction(num1, num2);
printProduct(num1, num2);
printQuotient(num1, num2);
printRemainder(num1, num2);
printPower(num1, num2);