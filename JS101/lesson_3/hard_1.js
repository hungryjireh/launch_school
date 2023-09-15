function printQuestion(questionNumber) {
  console.log(`=> Question ${questionNumber}`);
}

printQuestion('1');

// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());
// Try to answer without running the code or looking at the solution.

// No, as in second(), the function returns without executing any code.
// However, in first(), { prop1: "hi there" } is returned.

// SOLUTION
// These functions do not return the same thing. The function
// first() returns the expected value of { prop1: "hi there" } 
// but second() returns undefined without throwing any errors.

// The reason for this odd behavior is that semicolons,
// in JavaScript, are technically optional. However, when you
// omit them, the JavaScript engine inserts them where it
// thinks you need them. In second, JavaScript inserts a
// semicolon after the word return, so the function returns
// undefined. No errors are thrown since the rest of the code
// is valid, even though it never gets executed.

// Some developers rely on this behavior and write JavaScript
// code without semicolons. However, most developers consider
// it poor practice since you're relying on the engine to
// make decisions for you, and those decisions may not be what
// you intended.

printQuestion('2');
// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // { first: [1, 2] }

// objects are pass-by-reference in JavaScript.
// Array.prototype.push modifies the original array.
// numArray is pointing to the same array in memory as in the object `object`.
// Hence, modifications to `numArray` will also be present
// in `object.first`

printQuestion('3');
// Given the following similar sets of code, what will each code snippet print?

// A)

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // ["one"]
// console.log(`two is: ${two}`); // ["two"]
// console.log(`three is: ${three}`); // ["three"]

// messWithVars contains parameters, which shadows the global variables
// which have the same names
// thus, when messWithVars is executed, the arguments are reassigned,
// but the global variables remain unchanged.
// Hence, the values of `one`, `two`, `three` are
// `["one"]`, `["two"]` and `["three"]` respectively

// B)

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// messWithVars contains parameters, which shadows the global variables
// which have the same names
// thus, when messWithVars is executed, the arguments are reassigned,
// but the global variables remain unchanged.
// Hence, the values of `one`, `two`, `three` are
// `["one"]`, `["two"]` and `["three"]` respectively
// ADDITIONAL ANSWER:
// Though this detail has no outcome on the final output,
// it's important to note that within the messWithVars function,
// the local variables of one, two and three are being
// reassigned to brand new arrays. Which means they don't
// use any of the references that were passed to the
// function when it was invoked on line 11.

// C)

// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // ["two"]
// console.log(`two is: ${two}`); // ["three"]
// console.log(`three is: ${three}`); // ["one"]

// messWithVars() modifies the arrays `one`, `two` and `three` inplace
// due to the destructive operation `splice`
// thus, `one.splice(0, 1, "two")` modifies the array `one` to replace
// the current value at index 0 with the value `two`.
// next, `two.splice(0, 1, "three")` modifies the array `two` to replace
// the current value at index 0 with the value `three`.
// lastly, `three.splice(0, 1, "one")` modifies the array `three` to replace
// the current value at index 0 with the value `one`.
// hence, the global variables `one`, `two` and `three` are mutated
// and they contain the values `["two"]`, `["three"]` and `["one"]` respectively

printQuestion('4');
// Ben was tasked to write a simple JavaScript function to
// determine whether an input string is an IP address using
// 4 dot-separated numbers, e.g., 10.4.5.11. He is not
// familiar with regular expressions.

// Alyssa supplied Ben with a function named isAnIpNumber.
// It determines whether a string is a numeric string between
// 0 and 255 as required for IP numbers and asked Ben to use it.
// Here's the code that Ben wrote:

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  let isCorrectIpAddressFormat = true;
  if (dotSeparatedWords.length === 4) {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        isCorrectIpAddressFormat = false;
        break;
      }
    }
  } else {
    isCorrectIpAddressFormat = false;
  }

  return isCorrectIpAddressFormat;
}
// Alyssa reviewed Ben's code and said, "It's a good start,
// but you missed a few things.
// You're not returning a false condition,
// and you're not handling the case when the input
// string has more or less than 4 components, e.g., 4.5.5 or
// 1.2.3.4.5: both those values should be invalid."

// Help Ben fix his code.

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

// ** ALTERNATIVE SOLUTION
// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   if (dotSeparatedWords.length !== 4) {
//     return false;
//   }

//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       return false;
//     }
//   }

//   return true;
// }

console.log(isDotSeparatedIpAddress("4.5.5"));
console.log(isDotSeparatedIpAddress("1.2.3.4.5"));
console.log(isDotSeparatedIpAddress("10.4.5.11"));
console.log(isDotSeparatedIpAddress("10.hello.5.11"));
