/*
— problem: remove non-alphabetic characters from input string
  and replace with a single space, even for multiple non-
  alphabetic characters in a row
— examples: "---what's my +*& line?" -> " what s my line "
— input types: string
— expected output types: string
- rules: strings might contain upper/lowercase
— algo:
  iterate through string
  if character is not an alphabet
*/

function cleanUp(inputString) {
  let finalString = "";
  const inputStringArray = inputString.split("");
  const alphabeticRegex = /[a-zA-Z]/;
  for (let index = 0; index < inputStringArray.length; index += 1) {
    if (alphabeticRegex.test(inputStringArray[index])) {
      finalString += inputStringArray[index];
    } else if (finalString[finalString.length - 1] !== " ") {
      finalString += " ";
    }
  }
  return finalString;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "