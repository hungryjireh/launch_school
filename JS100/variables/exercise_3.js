/*
* What happens when you run the following program? 
* Why do we get that result?
* > Error, as foo is defined in a block and the console.log statement
* is outside of this block, which makes the variable inaccessible.
*/

{
  let foo = 'bar';
}

console.log(foo);