/*
Accepts two values,
Prints a message indicating if they match or not.
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
