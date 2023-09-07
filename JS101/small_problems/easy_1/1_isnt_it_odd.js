/*

Isn't It Odd
--

inputs:
  integer - positive, negative or 0
output:
  boolean

Implicit requirements:
1. Input is guaranteed to always an integer, hence no need to check input

Validation
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

Mental Model
1. Divide input integer by 2
2. If the remainder of the input integer is -1 or 1, return true
3. Else, return false

*/

function isOdd(integer) {
  return (integer % 2 === 1 || integer % 2 === -1);
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
