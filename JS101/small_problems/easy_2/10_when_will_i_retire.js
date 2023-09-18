/*
— problem: calculate how many more years the user has to work until retirement
— examples: age = 30, retirement age = 70, current year = 2017
  -> retirement year = 2057, number of years to work = 40
— input types: number
— expected output types: string
- rules: get current year, return year + years till retirement
— algo:
  - get user's age
  - get user's retirement age
  - calculate current year
  - calculate retirement year
  - calculate number of years till retirement
*/

let readlineSync = require('readline-sync');

console.log('What is your age?');
const age = parseInt(readlineSync.prompt(), 10);

console.log('At what age would you like to retire?');
const retirementAge = parseInt(readlineSync.prompt(), 10);

const currentYear = new Date().getFullYear();
const numberOfYearsToRetirement = retirementAge - age;
const retirementYear = new Date().getFullYear() + numberOfYearsToRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${numberOfYearsToRetirement} years of work to go!`);