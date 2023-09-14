function printQuestion(questionNumber) {
  console.log(`=> Question ${questionNumber}`);
}

printQuestion('1');
// Let's do some "ASCII Art": a stone-age form of nerd artwork
// from back in the days before computers had video screens.

// For this practice problem, write a program that outputs
// The Flintstones Rock! 10 times, with each line indented
// 1 space to the right of the line above it.
//The output should start out like this:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    ...

function asciiArt(inputString) {
  for (let index = 0; index < 10; ++index) {
    console.log(" ".repeat(index) + inputString);
  }
}

asciiArt("The Flintstones Rock!");

printQuestion('2');
// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";
// Return a new string that swaps the case of all of the letters:

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

function swapCase(inputString) {
  let output = "";
  for (let index = 0; index < inputString.length; ++index) {
    let charAtIndex = inputString[index];
    if (charAtIndex === charAtIndex.toLowerCase()) {
      output += charAtIndex.toUpperCase();
    } else if (charAtIndex === charAtIndex.toUpperCase()) {
      output += charAtIndex.toLowerCase();
    }
  }

  return output;
}

console.log(swapCase(munstersDescription));

printQuestion('3');
// Alan wrote the following function, which was intended to return
// all of the factors of number:

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }

// Alyssa noticed that this code would fail when the input is 0
// or a negative number, and asked Alan to change the loop.
// How can he make this work without using a do/while loop?
// Note that we're not looking to find the factors for 0 or
// negative numbers, but we want to handle it gracefully instead
// of raising an exception or going into an infinite loop.

// Bonus: What is the purpose of number % divisor === 0 in that code?

function factors(number) {
  let factors = [];
  for (let divisor = number; divisor > 0; divisor--) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
  }
  return factors;
}

console.log(factors(0));
console.log(factors(-3));
console.log(factors(3));

// number % divisor === 0 is to check that the divisor is a factor of the number
// ie. there is no remainder when number is divided by the divisor,
// which makes the number a factor

printQuestion('4');
// Alyssa was asked to write an implementation of a rolling buffer.
// You can add and remove elements from a rolling buffer.
// However, once the buffer becomes full, any new elements
// will displace the oldest elements in the buffer.

// She wrote two implementations of the code for adding elements
// to the buffer. In presenting the code to her team leader,
// she said "Take your pick. Do you prefer push() or concat()
// for modifying the buffer?".

// Is there a difference between these implementations,
// other than the method she used to add an element to the
// buffer? You may assume that newElement will always be a
// primitive value.

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// addToRollingBuffer1 - buffer is always pointing to the same object
// ** and hence mutates the original `buffer` argument
// addToRollingBuffer2 - new object `buffer` is always created when
// `buffer = buffer.concat(newElement)` is run,
// ** and hence does not mutate the `buffer` argument

printQuestion('5');
// What will the following two lines of code output?

console.log(0.3 + 0.6); // 0.9
console.log(0.3 + 0.6 === 0.9); // false
// Don't look at the solution before you answer.

// SOLUTION:
// If you thought that the outputs would be 0.9 and true,
// respectively, you were wrong. JavaScript uses floating
// point numbers for all numeric operations. Most
// floating point representations used on computers
// lack a certain amount of precision, and that can
// yield unexpected results like these.

// In this case, the output was:

// 0.8999999999999999
// false

printQuestion('6');
// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false
// Bonus:

// How can you reliably test if a value is NaN?

console.log(isNaN(nanArray[0]));

// SOLUTION
// The output is false. NaN -- not a number -- is a special
// numeric value that indicates that an operation that was
// intended to return a number failed. JavaScript doesn't
// let you use == and === to determine whether a value is NaN.

printQuestion('7');
// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34

// messWithIt does not alter the original `answer` variable as the
// `someNumber` parameter shadows the global variable `answer`
// `newAnswer` is hence assigned the value 50
// we thus see that the result of `answer - 8` is 34, as answer has not
// been amended by the function messWithIt().

printQuestion('8');
// One day, Spot was playing with the Munster family's home
// computer, and he wrote a small program to mess with their
// demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
// After writing this function, he typed the following code:

messWithDemographics(munsters);
// Before Grandpa could stop him, Spot hit the Enter key with
// his tail. Did the family's data get ransacked? Why or why not?

// Yes - demoObject is an object, hence it is a pass-by-reference
// when messWithDemographics is executed, the original object
// demoObject is mutated.
// This causes every key in `munsters` to have gender = 'other', and
// to have an age value that is 42 more than their actual age.

printQuestion('9');
// Function and method calls can take expressions as arguments.
// Suppose we define a function named rps as follows,
// which follows the classic rules of the rock-paper-scissors
// game, but with a slight twist: in the event of a tie,
// it just returns the choice made by both players.

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
// What does the following code output?

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// rps("rock", "scissors") is evaluated first -> "rock"
// rps(rps("rock", "paper"), rps("rock", "scissors"))
//   -> rps(rps("rock", "paper"), "rock")
//      -> rps("paper", "rock")
//         -> "paper"

// rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")
//  -> rps("paper", "rock")
//     -> "paper" // result

printQuestion('10');
// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
// What will the following function invocation return?

bar(foo());

// foo() -> "yes"
// bar("yes") -> "no"
// Thus, bar(foo()) will return "no"