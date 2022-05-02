/**
 * The following code causes an infinite loop (a loop that never stops iterating). Why?
 * > counter = 1 is always truthy and the loop condition is hence always true
 */
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}