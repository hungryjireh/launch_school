/* 
Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

What does this program log to the console? Why?

> 'bar' is logged to the console. The next attempt to initialise foo is in
> block scope, which the console.log statement cannot access outside
> of this scope.
*/