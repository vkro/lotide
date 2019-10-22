const assertArraysEqual = require('./assertArraysEqual');

/* 
Accepts an array of arrays
Returns a flattened version of the array
*/

const flatten = function(arr) {
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    let thisValue = arr[i];
    if (!Array.isArray(thisValue)) {
      flattenedArray.push(thisValue);
    } else for (let n = 0; n < thisValue.length; n++) {
      let nestedValue = thisValue[n];
      flattenedArray.push(nestedValue);
    }
  }
  return flattenedArray;
};

// TESTS

assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);


module.exports = flatten;