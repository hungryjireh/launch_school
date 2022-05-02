let rlSync = require('readline-sync');

function multiply(firstNumber, secondNumber) {
  return Number(firstNumber) * Number(secondNumber);
}

let firstNumber = rlSync.question('Enter the first number: ');
let secondNumber = rlSync.question('Enter the second number: ');

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);