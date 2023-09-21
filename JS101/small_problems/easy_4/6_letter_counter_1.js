/*
— problem: take an array, return an object that counts the number of words
  of different sizes
— examples: Four score and seven. -> { "3": 1, "4": 1, "5": 1, "6": 1 }
— input types: array of strings
— expected output types: object
- rules: words consist of any non-space characters,
  including punctuations eg. "seven."
— algo:
  - instantiate empty object -> obj
  - split string by space into an array
  - iterate through array
    - count length of word
    - if length of word in obj:
        obj[length of word] += 1
      else:
        obj[length of word] = 1
  - return obj
*/

function wordSizes(inputString) {
  const wordSize = {};
  const inputStringArray = inputString.split(" ");
  for (const word of inputStringArray) {
    if (word.length === 0) {
      continue;
    }

    if (wordSize.hasOwnProperty(word.length)) {
      wordSize[word.length] += 1;
    } else {
      wordSize[word.length] = 1;
    }
  }
  return wordSize;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}