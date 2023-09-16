/*
— problem: multiply two numbers
— examples: 5, 3 -> 15
— input types: integer, integer
— expected output types: integer
- rules: assume integer input
— algo:
  - multiply both integers
*/

function multiply(integer1, integer2) {
  return integer1 * integer2;
}

// ARROW
// const multiply = (num1, num2) => num1 * num2;

console.log(multiply(5, 3) === 15); // logs true
