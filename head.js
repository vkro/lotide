/*
Receives an array,
Returns the first item in the array.
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const head = function(arr) {
  return arr[0];
};

// TEST CODE
assertEqual(head([0, 1, 2, 3]), 0);
assertEqual(head([1]), 1);
assertEqual(head(["hey", "this", "is", "an", "array"]), "hey");
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), undefined);