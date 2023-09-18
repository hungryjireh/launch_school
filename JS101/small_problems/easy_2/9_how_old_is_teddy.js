function getTeddysAge(input1, input2) {
  let min = (input1 < input2) ? input1 : input2;
  let max = (input1 < input2) ? input2 : input1;

  const age = Math.floor((Math.random() * (max - min)) + min);
  console.log(`Teddy is ${age} years old!`);
}

getTeddysAge(20, 120);