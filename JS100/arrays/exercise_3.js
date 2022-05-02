let myArrayNested = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];

const findEvenValues2DArray = (nestedValues) => {
    nestedValues.forEach((values) => {
        values.forEach((value) => {
            if (value % 2 === 0) {
                console.log(value)
            }
        })
    })
}