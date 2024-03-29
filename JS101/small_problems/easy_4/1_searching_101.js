/*
— problem: get 6 numbers from user, describe whether 6th number
  appears among first 5 numbers
— examples: 25,15,20,17,23,17 -> true; 25,15,20,17,23,18 -> false
— input types: integer, integer, integer, integer, integer, integer
— expected output types: boolean
- data structure: array
- rules:
— algo:
  - add each number to an array
  - use Array.prototype.includes() to determine whether 6th number
    is present among 5 numbers
*/

let readlineSync = require('readline-sync');

const searchArray = [];

function getNumber(order) {
  console.log(`Enter the ${order} number: `);
  const number = parseInt(readlineSync.prompt(), 10);
  searchArray.push(number);
}

getNumber("1st");
getNumber("2nd");
getNumber("3rd");
getNumber("4th");
getNumber("5th");
getNumber("last");

/*
What if the problem was looking for a number that satisfies
some condition (e.g., a number greater than 25), instead of a specific number?
*/
const CHECK_NUMBER = 25;
const isMoreThanCheckNumber = searchArray.some((number) =>
  number > CHECK_NUMBER);
if (isMoreThanCheckNumber) {
  console.log(`There is at least 1 number that is more than ${CHECK_NUMBER} in ${searchArray.join(",")}.`);
} else {
  console.log(`There are no numbers that are more than ${CHECK_NUMBER} in ${searchArray.join(",")}.`);
}

const lastNumber = searchArray.pop();
if (searchArray.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${searchArray.join(",")}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${searchArray.join(",")}.`);
}