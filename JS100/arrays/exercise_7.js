const sumOfSquares = (arr) => {
    return arr.reduce((accumulator, element) => accumulator + element ** 2, 0)
}
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83