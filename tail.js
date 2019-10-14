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


const tail = function(arr) {
  let newArr = [];
  newArr = arr.slice(1);
  return newArr;
};

// TEST CODE
assertEqual((tail([0, 1, 2, 3])).length, ([1, 2, 3]).length);
assertEqual((tail([0, 1, 2, 3]))[0], ([1, 2, 3])[0]);
assertEqual((tail([0, 1, 2, 3]))[1], ([1, 2, 3])[1]);
assertEqual((tail([0, 1, 2, 3]))[2], ([1, 2, 3])[2]);
assertEqual((tail([1]))[0], ([])[0]);
assertEqual((tail(["hey", "this", "is", "an", "array"]))[2], (["this", "is", "an", "array"][2]));
assertEqual((tail([5, 6, 7]))[0], ([6, 7])[0]);
assertEqual((tail([])).length, ([]).length);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);