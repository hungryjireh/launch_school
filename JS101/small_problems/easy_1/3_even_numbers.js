/*
 — problem: log all EVEN numbers between 1 to 99 (inclusive), with each answer
   on a new line
— examples: 2, 4, 6, ...
— input types: 1, 2, 3, ..., 99
— expected output types: 2, 4, 6, ..., 98
- rules: 1 and 99 are included in evaluation, but will not be present in output
— algo: for each number, determine if remainder % 2 === 0.
    If so, log the number
    else, skip
*/

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 0) {
    console.log(number);
  }
}