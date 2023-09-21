/*
— problem: take an array, return an array with each element being
  the running total from the original array
— examples: [2, 5, 13] -> [2, 7, 20]
— input types: array of integers
— expected output types: array of integers
- rules: arrays only contain integers
— algo:
  - iterate for each element and add the previous index's value to itself
  - return array
*/

// function runningTotal(array) {
//   const runningTotalArray = [];
//   for (let index = 0; index < array.length; ++index) {
//     if (index === 0) {
//       runningTotalArray.push(array[index]);
//     } else {
//       runningTotalArray.push(array[index] + runningTotalArray[index - 1]);
//     }
//   }
//   return runningTotalArray;
// }

function runningTotal(array) {
  let sum = 0;
  return array.map((element) => {
    sum += element;
    return sum;
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []