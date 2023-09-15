/*
— problem: compute sum of numbers between 1 and given number
  that are multiples of 3 or 5
— examples: 20
— input types: integer greater than 1
— expected output types: integer
- rules: integer must be greater than 1
— algo:
  iterate from 1 to number
  if number % 3 === 0:
    sum += number
  else if number % 5 === 0:
    sum += number
  return sum
*/

function multisum(inputNumber) {
  let sum = 0;
  for (let number = 0; number <= inputNumber; number += 1) {
    if (number % 3 === 0) {
      sum += number;
    } else if (number % 5 === 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168