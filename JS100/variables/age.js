let rlSync = require('readline-sync');

const ageCalculation = (age) => {
  console.log(`You are ${age} years old.`);

  for (let i = 10; i < 50; i += 10) {
    console.log(`In ${i} years, you will be ${i + age} years old.`);
  }
}

let age = rlSync.question('What\'s your age?\n');
ageCalculation(parseInt(age, 10));