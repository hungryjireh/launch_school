let myArray1D = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
  ];
const mapNewArray = (values) => {
    return values.map((value) => {
        if (value % 2 === 0) {
            return 'even';
        } else {
            return 'odd';
        }
    })
}
console.log(myArrayNested)
console.log(mapNewArray(myArray1D))