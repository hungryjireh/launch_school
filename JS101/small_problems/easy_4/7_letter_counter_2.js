/*
— problem: take an array, return an object that counts the number of words
  of different sizes - excluding non-letters
— examples: Four score and seven. -> { "3": 1, "4": 1, "5": 1, "6": 1 },
  What's up doc? -> { "2": 1, "3": 1, "5": 1 }
— input types: array of strings
— expected output types: object
- rules: non-letters must be excluded
— algo:
  - instantiate empty object -> obj
  - split string by space into an array
  - iterate through array
    - iterate through word, exclude non-letters
    - count length of cleaned word
    - if length of cleaned word in obj:
        obj[length of cleaned word] += 1
      else:
        obj[length of cleaned word] = 1
  - return obj
*/

function wordSizes(inputString) {
  const wordSize = {};
  const inputStringArray = inputString.split(" ");
  for (const word of inputStringArray) {
    if (word.length === 0) {
      continue;
    }

    let cleanedWord = cleanWord(word);

    if (wordSize.hasOwnProperty(cleanedWord.length)) {
      wordSize[cleanedWord.length] += 1;
    } else {
      wordSize[cleanedWord.length] = 1;
    }
  }
  return wordSize;
}

function cleanWord(word) {
  let cleanedWord = "";
  for (let index = 0; index < word.length; ++index) {
    if (isLetter(word[index])) {
      cleanedWord += word[index];
    }
  }
  return cleanedWord;
}

function isLetter(character) {
  const lowerCaseLetter = character.toLowerCase();
  return (lowerCaseLetter) >= 'a' && lowerCaseLetter <= 'z';
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}