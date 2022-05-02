let rlSync = require('readline-sync');

let number1 = rlSync.question('Enter the first number\n');
let number2 = rlSync.question('Enter the second number\n');

console.log(`The numbers ${number1} and ${number2} add to ${parseInt(number1) + parseInt(number2)}`);