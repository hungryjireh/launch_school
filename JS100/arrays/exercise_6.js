const oddLengths = (arr) => {
    return arr.map(val => val.length)
            .filter(val => val % 2 > 0);
}
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]