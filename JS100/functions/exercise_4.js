/*
What does the following code log to the console?

> Returns nothing, as the return statement is declared before
the console.log statement, hence terminating the function.
*/

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');
