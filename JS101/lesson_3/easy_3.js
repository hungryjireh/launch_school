function printQuestion(questionNumber) {
  console.log(`=> Question ${questionNumber}`);
}

printQuestion('1');
// Write three different ways to remove all of the elements
// from the following array:

let numbers = [1, 2, 3, 4];

// splice
// console.log(numbers.splice(0));

// NOTE: logs 4 empty items instead of returning numbers as empty array
// numbers.forEach((_, index) => {
//   delete numbers[index];
// });

numbers.length = 0;

while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

printQuestion('2');
// What will the following code output?

console.log([1, 2, 3] + [4, 5]);
// Try to answer without running the code.

// 1,2,34,5
// arrays are converted to string, then strings are concatenated

printQuestion('3');
// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // "hello there"

// strings are primitive objects in javascript,
// hence reassigning str2 does not affect str1 as both are pointing to
// different objects in memory, even if they might have had the
// same values at first

printQuestion('4');
// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); // [{ first: 42 }, { second: "value2" }, 3, 4, 5];
// Try to answer without running the code.

// objects are pass by reference in javascript
// slice returns a shallow copy of arr1, hence any changes in objects in
// arr1 are also present in arr2 and vice-versa, since arr1 and arr2 have
// different pointers but are both pointing to the same object in memory
// since arr2 is modified, arr1's value is also modified

printQuestion('5');
// The following function unnecessarily uses two return statements
// to return boolean values. Can you rewrite this function so it only
// has one return statement and does not explicitly use either true or false?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// SOLUTION 1
// function isColorValid(color) {
//   return (color === "blue" || color === "green");
// }

// SOLUTION 2
function isColorValid(color) {
  return ["blue", "green"].includes(color);
}