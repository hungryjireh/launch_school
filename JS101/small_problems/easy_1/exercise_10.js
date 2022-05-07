const multisum = (value) => {
  return Array.from({ length: parseInt(value) + 1 }, (x, i) => i)
                  .filter((i) => (i % 3 === 0) || (i % 5 === 0))
                  .reduce((acc, val) => acc + val, 0);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168