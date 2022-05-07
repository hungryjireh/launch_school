/**
 * Given a list of numbers, write some code to find and display the largest numeric value in the list.
 * [1, 6, 3, 2] ->	6
 * [-1, -6, -3, -2] ->	-1
 * [2, 2] -> 2
 */

const maxValue = (array) => {
  return Math.max(...array);
}

const array1 = [1, 6, 3, 2];
console.log(maxValue(array1));

const array2 = [-1, -6, -3, -2];
console.log(maxValue(array2));

const array3 = [2, 2];
console.log(maxValue(array3));