/*
 — problem: get integer that is greater than 0 from user. Then, ask user
   if they want to get sum or product of all numbers between 1 and given
   integer and return the result
— examples: [2, p] -> 1 * 2 = 2. [2, s] -> 1 + 2 = 3
— input types: (1) integer only (2) "s" or "p"
— expected output types: string
- rules: entered integer is included
— algo:
  1. Get input from user and validate it is an integer greater than 0
  2. Get input from user and validate it is "s" or "p"
  3. Using for loop, for every number from 1 to given integer,
    - sum every number if "s"
    - multiply every number if "p"
*/

let readlineSync = require('readline-sync');

function isValidInteger(integer) {
  const intInteger = parseInt(integer, 10);
  return Number.isInteger(intInteger) && intInteger > 0;
}

function isValidOperator(operator) {
  return ["s", "p"].includes(operator);
}

function calculateAndDisplaySumOrProduct(integer, operator) {
  let result;
  switch (operator) {
    case "s":
      result = 0;
      for (let number = 1; number <= integer; number += 1) {
        result += number;
      }
      console.log(`The sum of the integers between 1 and ${integer} is ${result}.`);
      break;
    case "p":
      result = 1;
      for (let number = 1; number <= integer; number += 1) {
        result *= number;
      }
      console.log(`The product of the integers between 1 and ${integer} is ${result}.`);
      break;
  }
  return result;
}

let integer = readlineSync.question('Please enter an integer greater than 0: ');
while (!isValidInteger(integer)) {
  integer = readlineSync.question('Please enter a valid integer greater than 0: ');
}

let sumOrProduct = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
while (!isValidOperator(sumOrProduct)) {
  sumOrProduct = readlineSync.question('Invalid input; please enter "s" or "p": ');
}

calculateAndDisplaySumOrProduct(integer, sumOrProduct);