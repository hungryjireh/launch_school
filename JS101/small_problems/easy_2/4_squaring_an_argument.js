/*
— problem: compute square of argument
— examples: 5 -> 25, -8 -> 64
— input types: integer
— expected output types: integer
- rules: assume integer input (can be positive or negative)
— algo:
  - use multiply(), with integer1 === integer2 and return result
*/

function multiply(integer1, integer2) {
  return integer1 * integer2;
}

function square(integer) {
  return multiply(integer, integer);
}

function nPower(integer, power) {
  if (power < 2) {
    return "invalid";
  }

  let result = multiply(integer, integer);
  for (let powerCalculate = 2; powerCalculate < power; powerCalculate += 1) {
    result = multiply(result, integer);
  }
  return result;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

console.log(nPower(-8, 4)); // 4096