function printQuestion(questionNumber) {
  console.log(`=> Question ${questionNumber}`);
}

printQuestion('2');
// How can you determine whether a given string ends with an
// exclamation mark (!)?

function endsWithExclamationMark(inputString) {
  return (inputString && inputString.charAt(inputString.length - 1) === '!');
}

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
console.log(endsWithExclamationMark(str1));
console.log(endsWithExclamationMark(str2));

// ALTERNATE SOLUTION
str1.endsWith("!"); // true
str2.endsWith("!"); // false

printQuestion('3');
// Determine whether the following object of people
// and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log('Spot' in ages);
console.log('Herman' in ages);

let negativeExampleAges = { Sample: { Spot: 50 }, Herman: 32, Lily: 30, 
  Grandpa: 402, Eddie: 10 };
console.log('Spot' in negativeExampleAges);
console.log(negativeExampleAges.hasOwnProperty('Spot'));

// ** SOLUTION
ages.hasOwnProperty('Spot');

printQuestion('4');
// Using the following string, create a new string that contains all
// lowercase letters except for the first character, which should be capitalized
// (See the example output.)

let munstersDescription = " the Munsters are CREEPY and Spooky.";
let capitalizedMunstersDescription = munstersDescription[0].toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
console.log(capitalizedMunstersDescription);
console.log(capitalizedMunstersDescription === 'The munsters are creepy and spooky.');
// => The munsters are creepy and spooky.

printQuestion('5');
// What will the following code output?

console.log(false == '0'); // true
console.log(false === '0'); // false

printQuestion('6');
// We have most of the Munster family in our ages object:

let ages6 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };
// ages6.Marilyn = additionalAges.Marilyn;
// ages6.Spot = additionalAges.Spot;
// console.log(ages6);

// SOLUTION:
Object.assign(ages6, additionalAges);

printQuestion('7');
// Determine whether the name Dino appears in the strings below 
// -- check each string separately:

let str17 = "Few things in life are as important as house training your pet dinosaur.";
let str27 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str17.includes('Dino'));
console.log(str27.includes('Dino'));

printQuestion('8');
// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);

printQuestion('9');
// In the previous problem, our first answer added 'Dino'
// to the array like this:

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");
// How can we add multiple items to our array? ('Dino' and 'Hoppy')

console.log([].concat(flintstones, ['Dino', 'Hoppy']));

// SOLUTION
// flintstones.push('Dino', 'Hoppy');

printQuestion('10');
// Return a new version of this sentence that ends just before
// the word house. Don't worry about spaces or punctuation:
// remove everything starting from the beginning of house to
// the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.substring(0, advice.indexOf('house')));

// Expected return value:
// => 'Few things in life are as important as '

// ALTERNATIVE SOLUTION:
advice.slice(0, advice.indexOf('house'));
