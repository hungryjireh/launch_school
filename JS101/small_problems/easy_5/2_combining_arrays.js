/*
— problem: combine 2 arrays together with no duplicates
— examples: [1, 3, 5], [3, 6, 9] -> [1,3,5,6,9]
— input types: array, array
— expected output types: array
- rules: (1) no duplicates in output array
  (2) both arguments will always be arrays
  (3) both arrays may not be of the same size
— algo:
  - instantiate output array
  - iterate through first array
    - if element not in array, add to output array
  - iterate through second array
    - if element not in array, add to output array
*/

function union(array1, array2) {
  const outputArray = [];
  for (const element of array1) {
    if (!outputArray.includes(element)) {
      outputArray.push(element);
    }
  }
  for (const element of array2) {
    if (!outputArray.includes(element)) {
      outputArray.push(element);
    }
  }
  return outputArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]