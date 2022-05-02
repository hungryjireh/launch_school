const objectLiteral = () => {
    let myArray = {
        0: "world",
        1: "bar",
        2: "swam",
        length: 3
    };
    
    for (let i = 0; i < myArray.length; i += 1) {
      console.log(myArray[i]);
    }
}
objectLiteral();