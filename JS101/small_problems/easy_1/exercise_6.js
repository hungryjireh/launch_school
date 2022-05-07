let readlineSync = require('readline-sync');

const integerValue = readlineSync.question('Please enter an integer greater than 0: ');
const sumOrProduct = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (sumOrProduct === 's') {
  let result = Array.from({ length: parseInt(integerValue) + 1 }, (x, i) => i).reduce((acc, val) => acc + val, 0);
  console.log(`The sum of the integers between 1 and ${integerValue} is ${result}.`)
} else if (sumOrProduct === 'p') {
  let result = Array.from({ length: parseInt(integerValue) }, (x, i) => i + 1).reduce((acc, val) => acc * val, 1);
  console.log(`The product of the integers between 1 and ${integerValue} is ${result}.`);
}