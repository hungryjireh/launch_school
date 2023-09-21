/*
— problem: determine whether an integer is a palindrome
— examples: 34543 -> true, 123210 -> false
— input types: integer
— expected output types: boolean
- rules: integers only
— algo:
  - convert integer to string
  - check for equality with reversed string
*/

function isPalindromicNumber(inputInteger) {
  return inputInteger.toString() === inputInteger.toString().split("").reverse().join("");
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true