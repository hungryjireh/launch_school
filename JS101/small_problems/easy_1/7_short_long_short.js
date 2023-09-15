/*
 — problem: determine length of each string,
   and return short + long + short strings
— examples: "abc", "defgh" -> "abcdefghabc"
— input types: strings
— expected output types: string
- rules: each string is of different length
— algo:
  1. if length(first input) > length(second_input)
       return second + first + second
    else:
        return first + second + first
*/

function shortLongShort(string1, string2) {
  return (string1.length > string2.length) ?
    string2 + string1 + string2 : string1 + string2 + string1;
}

console.log(shortLongShort('abc', 'defgh'));   // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"