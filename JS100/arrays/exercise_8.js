const oddLengthsReduce = (arr) => {
    return arr.reduce((accumulator, element) => {
        if (element.length % 2 > 0) {
            accumulator.push(element.length);
        }
        return accumulator;
    }, [])
}
console.log(oddLengthsReduce(arr))