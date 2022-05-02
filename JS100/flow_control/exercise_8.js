const numberRange = (value) => {
  if (value < 0) {
      console.log(`${value} is less than 0`);
  } else if (value >= 0 && value <= 50) {
      console.log(`${value} is between 0 and 50 (inclusive)`);
  } else if (value >= 51 && value <= 100) {
      console.log(`${value} is between 51 and 100 (inclusive)`);
  } else {
      console.log(`${value} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);