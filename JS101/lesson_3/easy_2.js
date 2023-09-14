function printQuestion(questionNumber) {
  console.log(`=> Question ${questionNumber}`);
}

printQuestion('1');

// Given a string, return a new string that replaces every
// occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replaceAll('important', 'urgent'));

printQuestion('2');
// The Array.prototype.reverse method reverses the order of
// elements in an array, and Array.prototype.sort can rearrange
// the elements in a variety of ways, including descending.
// Both of these methods mutate the original array as shown below.
// Write two distinct ways of reversing the array without
// mutating the original array.
// Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.slice().reverse();
console.log(numbers);
console.log(newNumbers);

numbers = [1, 2, 3, 4, 5];
newNumbers = numbers.slice().sort((num1, num2) => num2 - num1);
console.log(numbers);
console.log(newNumbers);
// SOLUTION:
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

// Bonus Question: Can you do it using the Array.prototype.forEach() method?
numbers = [1, 2, 3, 4, 5];
newNumbers = [];
numbers.forEach((item) => {
  newNumbers.unshift(item);
});
console.log(numbers);
console.log(newNumbers);

printQuestion('3');
// Given a number and an array, determine whether the number
// is included in the array.

numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true
console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

printQuestion('4');
// Starting with the string:

let famousWords = "seven years ago...";
// show two different ways to put the expected "Four score and " in front of it.

console.log("Four score and " + famousWords);
console.log("Four score and ".concat(famousWords));

printQuestion('5');
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array
// by removing the number at index 2, so that the array
// becomes [1, 2, 4, 5].

numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers);

printQuestion('6');
// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// This code will create a nested array that looks like this:

// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// Nesting data structures like we do here is commonplace in
// JavaScript and programming in general. We'll explore this in
// much greater depth in a future Lesson.

// Create a new array that contains all of the above values,
//but in an un-nested format:

// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
console.log(flintstones.flat());
console.log(flintstones);
let spreadFlintstonesArray = [].concat(...flintstones);
console.log(spreadFlintstonesArray);

// ALTERNATIVE SOLUTION
let flattenedFlintstonesArray = [];
flintstones.forEach((item) => {
  flattenedFlintstonesArray = flattenedFlintstonesArray.concat(item);
});
console.log(flattenedFlintstonesArray);

const reducedFlintstonesArray = flintstones.reduce((curr, item) =>
  curr.concat(item), []);
console.log(reducedFlintstonesArray);

printQuestion('7');
// Consider the following object:

let flintstonesObj = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3,
  Bambam: 4, Pebbles: 5 };
// Create an array from this object that contains only two elements:
// Barney's name and Barney's number:

// [ 'Barney', 2 ]
console.log(Object.entries(flintstonesObj).filter((arr) => arr[0] === 'Barney').shift());

printQuestion('8');
// How would you check whether the objects assigned to variables
// numbers and table below are arrays?

let numbers8 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers8));
console.log(Array.isArray(table));

printQuestion('9');
// Back in the stone age (before CSS), we used spaces to align
// things on the screen. If we have a 40-character wide table of
// Flintstone family members, how can we center the following title
// above the table with spaces?

let title = "Flintstone Family Members";

let totalWhitespaceAvailable = 40 - title.length;
console.log(" ".repeat(totalWhitespaceAvailable / 2) + title + " ".repeat(totalWhitespaceAvailable / 2));

// ALTERNATE SOLUTION
let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);

printQuestion('10');
// Write a one-line expression to count the number of
// lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);
