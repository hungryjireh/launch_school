/*
— problem: return right angled triangle, where hypotenuse has
one end at bottom left and another at upper right
— examples: 5 ->

    *
   **
  ***
 ****
*****

— input types: integer
— expected output types: string
- rules:
— algo:
  - number of stars = 1
  - number of spaces = n - number of stars
  - iterate for n times:
    print number of spaces * " " +
      number of stars * "*"
*/

function triangle(nIndex) {
  let starsNumber = 1;
  let spacesNumber = nIndex - starsNumber;
  for (let index = 0; index < nIndex; index += 1) {
    console.log(`${" ".repeat(spacesNumber)}${"*".repeat(starsNumber)}`);
    starsNumber += 1;
    spacesNumber -= 1;
  }
}

triangle(5);
triangle(9);