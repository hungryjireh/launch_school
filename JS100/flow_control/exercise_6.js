/**
 * 
 * What does this code output to the console?
 * > outputs Not Empty, because it checks whether arr is defined (checks whether arr is falsy)
 */
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); 