/*
— problem: calculate average of 3 grades and return associated letter grade
— examples: 95, 90, 93 -> A
— input types: integer, integer, integer
— expected output types: string
- rules: values are all between 0 and 100
— algo:
  - calculate average of 3 numbers
  - if-else statements to get letter grade
*/

function getGrade(score1, score2, score3) {
  const average = (score1 + score2 + score3) / 3;
  if (90 <= average && average <= 100) {
    return 'A';
  } else if (80 <= average && average < 90) {
    return 'B';
  } else if (70 <= average && average < 80) {
    return 'C';
  } else if (60 <= average && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"