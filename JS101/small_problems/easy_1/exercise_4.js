let readlineSync = require('readline-sync');

console.log('Enter the length of the room in meters:');
const lengthMeters = readlineSync.prompt();

console.log('Enter the width of the room in meters:');
const widthMeters = readlineSync.prompt();

const areaSquareMeters = lengthMeters * widthMeters;
const areaSquareFeet = lengthMeters * widthMeters * 10.7639;
console.log(`The area of the room is ${areaSquareMeters.toFixed(2)} square meters (${areaSquareFeet.toFixed(2)} square feet).`)