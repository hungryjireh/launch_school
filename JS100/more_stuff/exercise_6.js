/**
 * Write a function that searches an array of strings for every element that matches
 *  the regular expression given by its argument. 
 * The function should return all matching elements in an array.
 */

const allMatches = (array, regexp) => {
  return array.filter((item) => item.match(regexp));
}

console.log(allMatches(["the", "them", "they", "lab"], /th/));

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));