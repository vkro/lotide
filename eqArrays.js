/*
Receives two arrays,
Returns true or false, based on a perfect match.
*/

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let equalSoFar = true;
    for (let i = 0; i < arr1.length; i++) {
      if (equalSoFar === true) {
        if (arr1[i] !== arr2[i]) {
          equalSoFar = false;
        }
      }
    }
    return equalSoFar;
  } else return false;
};



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(["a", "b", "c", "d"],["a", "b", "c", "d"]), true);
assertEqual(eqArrays(["a", "b", "c", "d"],["a", "b", "c", "c"]), false);
assertEqual(eqArrays(["a", "d", "c", "d"],["a", "b", "c", "d"]), false);
assertEqual(eqArrays(["a", "d", "c", "d"], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 4, 5], [1, 2, 3, 4]), false);
assertEqual(eqArrays([9, 2, 3, 4], [1, 2, 3, 4]), false);