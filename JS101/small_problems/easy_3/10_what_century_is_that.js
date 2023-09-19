/*
— problem: return century that ends with 'st', 'nd', 'rd', or 'th'
— examples: 2000 -> 20th, 2001 -> 21st
— input types: integer
— expected output types: string
- rules: centuries have a different postfix
  - if endswith 11/12/13, postfix = "th"
    else:
      1: "st", 2: "nd", 3: "rd"
— algo:
  calculate century -> Math.ceil(year / 100)
  determine postfix
*/

function century(year) {
  const century = Math.ceil(year / 100);
  const centuryString = century.toString();
  if (centuryString.endsWith("11") || centuryString.endsWith("12") || centuryString.endsWith("13")) {
    return centuryString + "th";
  } else if (centuryString.endsWith("1")) {
    return centuryString + "st";
  } else if (centuryString.endsWith("2")) {
    return centuryString + "nd";
  } else if (centuryString.endsWith("3")) {
    return centuryString + "rd";
  } else {
    return centuryString + "th";
  };
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"