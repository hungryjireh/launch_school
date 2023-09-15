/*
 — problem: log all ODD numbers between 1 to 99 (inclusive), with each answer
   on a new line
— examples: 1, 3, 5, ...
— input types: 1, 2, 3, ..., 99
— expected output types: 1, 3, 5, ..., 99
- rules: 1 and 99 are included
— algo: for each number, determine if remainder % 2 === 1.
    If so, log the number
    else, skip
*/

for (let number = 1; number < 100; number += 2) {
  console.log(number);
}

for (let number = 0; number < 100; number += 1) {
  if (number % 2 === 1) {
    console.log(number);
  }
}
