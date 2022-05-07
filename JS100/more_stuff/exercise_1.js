/**
 * What does this code log to the console? Why?
 * > prints out [1, 4, 3]
 * > array 2 references array1, and is not a deep copy of it
 * > Hence, any changes to array1 is reflected when printing out array2
 */

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);