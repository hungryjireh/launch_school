/*
— problem: swap first and last character of each word in a string of words
— examples: Oh what a wonderful day it is -> "hO thaw a londerfuw yad ti si"
— input types: string
— expected output types: string
- rules: (1) each string contains nothing but words and spaces
  (2) that there are no leading, trailing, or repeated spaces.
— algo:
  - instantiate new empty array -> swapArray
  - split string into array
  - iterate through array:
    swapArray.push(word[word.length - 1] +
      word.substring(1, word.length - 1) + word[0])
  - return swapArray
*/

function swap(inputString) {
  const swapArray = [];
  const inputStringArray = inputString.split(" ");
  for (const word of inputStringArray) {
    if (word.length === 1) {
      swapArray.push(word);
    } else {
      const firstChar = word[0];
      const lastChar = word[word.length - 1];
      const middleString = (word.length > 2) ? word.substring(1, word.length - 1) : "";
      swapArray.push(lastChar + middleString + firstChar);
    }
  }
  return swapArray;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"