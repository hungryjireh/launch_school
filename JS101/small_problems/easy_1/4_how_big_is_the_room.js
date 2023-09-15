/*
 — problem: get length and width of a room from a user in metres, then
   print the area of the room, first in square metres, then in square feet
— examples: if length = 2 and width = 1, sqm = 2, sqft = 2 * 10.7639
— input types: any number (not validated)
— expected output types: number (floating point or integer)
- rules: no input validation required
— algo:
  1. Get length of room in metres from user
  2. Get width of room in metres from user
  3. Calculate area of room in square metres
  4. Calculate area of room in square feet
  5. display result to user in 2 dp

- clarifications:
  1. Must the inputs be in integers?
*/

let readlineSync = require('readline-sync');

const SQMETRES_TO_SQFEET = 10.7639;

console.log('Enter the length of the room in meters:');
const lengthMeters = readlineSync.prompt();

console.log('Enter the width of the room in meters:');
const widthMeters = readlineSync.prompt();

const areaSquareMeters = lengthMeters * widthMeters;
const areaSquareFeet = lengthMeters * widthMeters * SQMETRES_TO_SQFEET;
console.log(`The area of the room is ${areaSquareMeters.toFixed(2)} square meters (${areaSquareFeet.toFixed(2)} square feet).`);