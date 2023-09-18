let readlineSync = require('readline-sync');

console.log('Enter a noun:');
const noun = readlineSync.prompt();

console.log('Enter a verb:');
const verb = readlineSync.prompt();

console.log('Enter an adjective:');
const adjective = readlineSync.prompt();

console.log('Enter an adverb:');
const adverb = readlineSync.prompt();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb} ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb} up ${adjective} Joe's turtle.`);