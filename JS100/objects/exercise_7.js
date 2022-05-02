let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj = Object.create(myProtoObj);
myObj.qux = 3;
  
// Snippet 1 - only iterates through own properties
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// Snippet 2 - iterates through ALL keys
for (let key in myObj) {
  console.log(key);
}