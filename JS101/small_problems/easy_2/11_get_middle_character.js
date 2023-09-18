/*
— problem: return middle character in string
— examples: I Love JavaScript -> a
— input types: string
— expected output types: string
- rules: (1) for string with length odd number, return 1 character
  (2) for string with length even number, return 2 characters
— algo:
  - split string into array by empty space delimiter
  - if length of string is odd:
      return char at index = Math.floor(length of array / 2)
    else if length of string is even:
      return char at index = Math.floor(length of array / 2) and
        char at index = Math.floor(length of array / 2) - 1
*/

function centerOf(inputString) {
  const stringArray = inputString.split("");
  if (stringArray.length % 2 === 0) {
    const middleChar = stringArray.length / 2;
    return stringArray[middleChar - 1] + stringArray[middleChar];
  } else {
    const middleCharIndex = Math.floor(stringArray.length / 2);
    return stringArray[middleCharIndex];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"