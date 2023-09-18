/*
— problem: for given integer n, return string containing
  alternating 1s and 0s starting with 1
— examples: 6 -> 101010
— input types: integer
— expected output types: string
- rules:
— algo:
  - iterate for n times:
    if i % 2 === 0:
      finalString += '1'
    else:
      finalString += '0'
*/

function stringy(length) {
  let finalString = "";
  for (let index = 0; index < length; index += 1) {
    if (index % 2 === 0) {
      finalString += "1";
    } else {
      finalString += "0";
    }
  }
  return finalString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"