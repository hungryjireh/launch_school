/* 
2. Use the arithmetic operators to determine the individual digits of a 
4-digit number like 4936:
*/

let number = 4936;
let onesPlace = number % 10;
let tensPlace = ((number % 100) - onesPlace) / 10;
let hundredsPlace = ((number % 1000) - (tensPlace * 10) - onesPlace) / 100;
let thousandsPlace = (number - (hundredsPlace * 100) - (tensPlace * 10) - onesPlace) / 1000
console.log(onesPlace, tensPlace, hundredsPlace, thousandsPlace);