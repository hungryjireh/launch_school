/*
— problem: return every other element in array (1, 3, 5, ....)
— examples: [2, 3, 4, 5, 6] -> [2, 4, 6]
— input types: array of numbers
— expected output types: array of numbers
- rules: return array containing 1st, 3rd numbers etc
- if array is empty, return empty array
— algo:
  - create new empty array
  - iterate through array
      - for every other index, add it to a new array
  - return new array
*/

function oddities(array) {
  const oddArray = [];
  for (let index = 0; index < array.length; index += 2) {
    oddArray.push(array[index]);
  }
  return oddArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []