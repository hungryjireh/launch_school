/*
— problem: return true if one argument is truthy, false otherwise
— examples: true, true -> false, true, false -> true, false,
  false -> false, false, true -> true
— input types: string/boolean/number
— expected output types: boolean
- rules: inputs can be numbers, boolean or string
— algo:
  - if both inputs are truthy, return false
  - else if either input is truthy, return true
  - else, return false
*/

function xor(input1, input2) {
  if (input1 && input2) {
    return false;
  } else if (input1 || input2) {
    return true;
  } else {
    return false;
  }
}

// ALTERNATIVE - cleaner
// function xor(value1, value2) {
//   if ((value1 && !value2) || (value2 && !value1)) {
//     return true;
//   }
//   return false;
// }

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor('hello', 0) === true);   // true