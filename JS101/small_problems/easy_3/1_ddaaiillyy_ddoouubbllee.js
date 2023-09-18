/*
— problem: collapse duplicate characters into a single character
— examples: ddaaiillyy ddoouubbllee -> daily double
— input types: string
— expected output types: string
- rules:
— algo:
  - initialise collapsedString = ""
  - iterate through string
    if character == last character in collapsedString:
      continue
    else:
      collapsedString = collapsedString + character
*/

function crunch(inputString) {
  let collapsedString = "";
  const inputStringArray = inputString.split("");
  for (let index = 0; index < inputStringArray.length; index += 1) {
    if (collapsedString === "" || collapsedString[collapsedString.length - 1] !== inputStringArray[index]) {
      collapsedString += inputStringArray[index];
    }
  }
  return collapsedString;
}

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""