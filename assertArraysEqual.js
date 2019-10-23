const eqArrays = require('./eqArrays');

/*
Accepts two arrays
Logs a message in the console about whether they are equal or not
*/
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertArraysEqual;
