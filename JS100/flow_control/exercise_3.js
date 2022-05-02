const evenOrOdd = (value) => {
  if (!Number.isInteger(value)) {
      console.log('not an integer');
      return;
  }
if (value % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}
}

evenOrOdd(9);
evenOrOdd(8);
evenOrOdd('string');
evenOrOdd(8.2);