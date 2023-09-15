/*
— problem: return welcome greeting to stranger
— examples: ["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }
  -> logs Hello, John Q Doe! Nice to have a Master Plumber around.
— input types: string array, object containing "title" and "occupation" keys
— expected output types: string
- rules:
  - should be able to handle empty array
  - should be able to handle empty values in object
— algo:
  - join first input array as string with " " as delimiter
  - call object in placeholder
*/

function greetings(nameArray, titleOccupation) {
  return `Hello, ${nameArray.join(" ")}! Nice to have a ${titleOccupation.title} ${titleOccupation.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);