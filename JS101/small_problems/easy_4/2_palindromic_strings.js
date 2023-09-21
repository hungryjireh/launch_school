/*
— problem: determine whether a string is a palindrome
— examples: madam -> true, Madam -> false
— input types: string
— expected output types: boolean
- rules: case sensitive inputs, all characters matter
— algo:
  - number of iterations = Math.ceil(inputString.length / 2)
  - get front character, get back character -> compare
    if front character !== back character:
      return false
    return true at end of iteration
*/

function isPalindrome(inputString) {
  const loopIterations = Math.ceil(inputString.length / 2);
  for (let index = 0; index < loopIterations; index += 1) {
    const frontChar = inputString.charAt(index);
    const backChar = inputString.charAt(inputString.length - 1 - index);
    if (frontChar !== backChar) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true