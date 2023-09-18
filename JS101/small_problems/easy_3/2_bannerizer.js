/*
— problem: create a box around text
— examples: To boldly go where no one has gone before. ->

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

— input types: string
— expected output types: string
- rules:
— algo:
  - box length = get length of input string + 2:
    - 2 => space padding
  - add | to the left and right of text
*/

function logInBox(inputString) {
  const boxLength = inputString.length + 2;
  const boxBorder = "+" + "-".repeat(boxLength) + "+";
  const boxPadding = "|"  + " ".repeat(boxLength) + "|";
  const boxWords = "|" + " " + inputString + " " + "|";
  console.log(boxBorder);
  console.log(boxPadding);
  console.log(boxWords);
  console.log(boxPadding);
  console.log(boxBorder);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
