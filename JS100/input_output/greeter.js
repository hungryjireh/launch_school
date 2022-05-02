// library is returned as an object, which is assigned to a variable.
let rlSync = require('readline-sync');

/**
 * 1. Write a dynamic greeter program named greeter.js. The program should 
 * ask for your name, then output Hello, {name}! where {name} is
 * the name you entered:
 */

// let name = rlSync.question('What\'s your name?\n');
// console.log(`Good Morning, ${name}!`);

/**
 * 2. Modify the greeter.js program to ask for the user's first and last names 
 * separately, then greet the user with their full name.
 */

let firstName = rlSync.question('What\'s your first name?\n');
let lastName = rlSync.question('What\'s your last name?\n');

console.log(`Hello, ${firstName + ' ' + lastName}!`);