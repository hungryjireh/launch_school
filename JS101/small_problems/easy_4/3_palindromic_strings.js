/*
— problem: determine whether a string is a palindrome
— examples: madam -> true, Madam -> true
— input types: string
— expected output types: boolean
- rules: case insensitive inputs, only alphanumeric characters matter
— algo:
  - clean input:
    - iterate through input string, ensure alphanumeric characters only
  - check if palindrome by comparing clean string and reversed cleaned string
*/

function isRealPalindrome(inputString) {
  const replaced = inputString.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
  return replaced === replaced.split("").reverse().join("");
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false