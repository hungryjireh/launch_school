/* 
What does this code log to the console? Does executing the foo 
function affect the output? Why or why not?

> Function outputs 1. let bar = 2 is defined in a function scope. 
Hence, the declaration of both variables are done independently and
do not affect each other.
*/

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);