/*
— problem: return second last word in string
— examples: last word -> last
— input types: string
— expected output types: string
- rules: (1) assume string will always contain at least 2 words.
  (2) words are non-blank characters
— algo:
  - split string into array by space delimiter
  - return word at index = length of array - 1
*/

function penultimate(inputString) {
  const splitStringIntoList = inputString.split(" ");
  return splitStringIntoList[splitStringIntoList.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/*
— problem: return middle word in string
— examples: this last word -> last, this word -> word
— input types: string
— expected output types: string
- rules: (1) assume string will always contain at least 2 words.
  (2) words are non-blank characters
  (3) for string with length even number, return word at array.length / 2
— algo:
  - split string into array by space delimiter
  - return word at index = Math.floor(length of array / 2)
*/
function middle(inputString) {
  const splitStringIntoList = inputString.split(" ");
  const middleIndex = Math.floor(splitStringIntoList.length / 2);
  return splitStringIntoList[middleIndex];
}

console.log(middle("last word")); // logs true
console.log(middle("Launch School is great!")); // logs true
