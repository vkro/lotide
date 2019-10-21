const eqArrays = require('./eqArrays');


/*
Receives two arrays
Logs a message in the console about whether they are equal or not
*/
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${array1} !== ${array2}`);
  }
};


module.exports = assertArraysEqual;
