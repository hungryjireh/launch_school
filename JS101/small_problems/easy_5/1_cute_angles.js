/*
— problem: take number of degrees and return a string representing that
  angle in degrees, minutes and seconds
— examples: 30 -> 30°00'00", 76.73 -> 76°43'48"
— input types: number
— expected output types: string
- rules: (1) 60 minutes in a degree
  (2) 60 seconds in a minute.
— algo:
  - convert to string -> get integer and decimal portion
    - integer (degrees)
    - integer * 60 (minutes)
  - convert to string again to get integer and decimal portion again
    - integer * 60 (seconds)
*/

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(inputNumber) {
  const inputNumberInteger = getInteger(inputNumber);
  const validDegree = getValidDegree(Number(inputNumberInteger));
  const inputNumberDecimal = getDecimal(inputNumber);
  if (inputNumberDecimal !== 0) {
    const minute = Number(inputNumberDecimal) * MINUTES_PER_DEGREE;
    const minuteInteger = getInteger(minute);
    const minuteIntegerString = padZeroes(minuteInteger);
    const minuteDecimal = getDecimal(minute);
    if (minuteDecimal !== 0) {
      const degree = Math.round(Number(minuteDecimal) * SECONDS_PER_MINUTE);
      const degreeString = padZeroes(degree);
      return `${validDegree}°${minuteIntegerString}'${degreeString}"`;
    }
  }
  return `${validDegree}°00'00"`;
}

function getInteger(floatingNumber) {
  const inputFloatingNumberArray = floatingNumber.toString().split(".");
  return inputFloatingNumberArray[0];
}

function getDecimal(floatingNumber) {
  const inputIntegerStringArray = floatingNumber.toString().split(".");
  if (inputIntegerStringArray.length > 1) {
    const decimalPlace = 1 / Math.pow(10, inputIntegerStringArray[1].length);
    return Number(inputIntegerStringArray[1]) * decimalPlace;
  }
  return 0;
}

function padZeroes(integer) {
  return (integer.toString().length < 2) ? `0${integer}` : `${integer}`;
}

function getValidDegree(degree) {
  if (degree < 0) {
    let negativeDegree = degree + 360;
    while (negativeDegree < 0) {
      negativeDegree += 360;
    }
    return negativeDegree;
  } else if (degree > 360) {
    let degreeOver360 = degree - 360;
    while (degreeOver360 > 360) {
      degreeOver360 -= 360;
    }
    return degreeOver360;
  }
  return degree;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"