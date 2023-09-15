/*
— problem: determine whether year is a leap year
— examples: 1600 -> true, 2016 -> true, 2015 -> false
— input types: integer greater than 0
— expected output types: boolean
- rules: year must be integer and greater than 0
— algo:
  1. if year is before 1752
        if year is divisible by 4, is leap year
  2. else
      if year is divisible by 400, is leap year
      else if year is divisible by 100, not a leap year
      else if year is divisible by 4, is leap year
      else is not leap year
*/

// BETTER SOLUTION
function isLeapYear(year) {
  if (year < 1752) {
    if (year % 4 === 0) {
      return true;
    }
  }
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

// function isLeapYear(year) {
//   if (year < 1752 && year % 4 === 0) {
//     return true;
//   } else if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // true
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // true
console.log(isLeapYear(400)); // true