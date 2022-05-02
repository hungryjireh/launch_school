
const factorialRecursionCalculator = (n) => {
  if (n === 1) {
      return 1;
  } else {
      return factorialRecursionCalculator(n - 1) * n
  }
}

console.log(factorialRecursionCalculator(8));