/*
 — problem: get bill amount and tip rate from user
   Then, return tip and total amount to the user.
— examples: bill = 200, tip = 15% -> tip = $30, total = $230
— input types: any number (not validated)
— expected output types: number (floating point or integer) in 2dp
- rules: no input validation required
— algo:
  1. Get bill amount from user
  2. Get tip percentage from user
  3. Calculate tip
  4. Calculate total bill (tip + total bill)
  5. display result to user in 2 dp
*/


let readlineSync = require('readline-sync');

const bill = parseFloat(readlineSync.question('What is the bill? '));
const tipPercentage = parseFloat(readlineSync.question('What is the tip percentage? '));

const tip = bill * (tipPercentage / 100);
const total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);