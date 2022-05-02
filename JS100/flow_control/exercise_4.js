/**
 * What does the following code log to the console, and why?
 * Product2
 * Product 3
 * Product not found!
 * 
 * Since there are no break statements, causes a fall through
 */

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');