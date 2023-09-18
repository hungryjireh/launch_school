/*
— problem: always return negative number
— examples: 3 -> -3, -3 -> -3
— input types: number
— expected output types: number
- rules: (1) if number is negative, return as is
  (2) if number is positive, return negative number
— algo:
  - if number <= 0:
      return number
    else:
      return -number
*/

function negative(number) {
  if (number < 0) {
    return number;
  } else {
    return -number;
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0