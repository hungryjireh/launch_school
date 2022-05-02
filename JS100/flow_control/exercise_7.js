const allCapsIfLenGreaterThanTen = (value) => {
  return (value.length > 10) ? value.toUpperCase() : value;
}

console.log(allCapsIfLenGreaterThanTen("whats up ladies and gentlemen"));
console.log(allCapsIfLenGreaterThanTen("whats up"));