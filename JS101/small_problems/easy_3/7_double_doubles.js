/*
— problem: return number as is if left side digits = right side digits,
  but return double of number otherwise
— examples: 37 -> 74, 44 -> 44
— input types: integer
— expected output types: integer
- rules: if input integer has odd digits, it will never be a double number
— algo:
  - convert number to string
  - get middle index
  - take left substring, and take right substring
  - if leftSubstring === rightSubstring:
      return number as is
    else:
      return number * 2
*/

function twice(number) {
  const numberString = number.toString();
  if (numberString.length % 2 === 0) {
    const midpoint = (numberString.length / 2);
    const leftSubstring = numberString.substring(0, midpoint);
    const rightSubstring = numberString.substring(midpoint);
    if (leftSubstring === rightSubstring) {
      return number;
    }

    return (leftSubstring === rightSubstring) ? number : number * 2;
  }
  return number * 2;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));