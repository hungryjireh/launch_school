/*
— problem: calculate UTF-16 value of string
— examples: 'Four score'
— input types: string
— expected output types: integer
- rules: input must be a string
— algo:
  initialise sum = 0
  for each character, get charCode and add to sum
*/

function utf16Value(inputString) {
  return inputString.split("")
    .map((_, index) => inputString.charCodeAt(index))
    .reduce((sum, currentValue) => sum + currentValue, 0);
}

console.log(utf16Value('Four score')); // 984
console.log(utf16Value('Launch School')); // 1251
console.log(utf16Value('a')); // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811