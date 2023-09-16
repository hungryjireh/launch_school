/*
— problem: get input and greet user, if name ends with exclamation,
  return greeting in caps
— examples: Bob -> Hello Bob; Bob! -> HELLO BOB. WHY ARE WE SCREAMING?
— input types: string
— expected output types: string
- rules: assume string input
— algo:
  - get input from user
  - if !input.endsWith("!")
      return Hello + input
    else
      return HELLO + input.toUpperCase() + .WHY ARE WE SCREAMING?
*/

let readlineSync = require('readline-sync');

console.log('What is your name?');
const name = readlineSync.prompt();

if (name.endsWith("!")) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}