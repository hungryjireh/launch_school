/**
 * Does the following code produce an error? Why or why not? 
 * What output does this code send to the console?
 * > no error as parameters are optional for a for loop. We terminate after 5 iterations as i is
 * increasing within the block.
 * 
 * Output:
 * 0
 * 1
 * 2
 * 3
 * 4
 */

for (let i = 0; i < 5;) {
  console.log(i += 1);
}