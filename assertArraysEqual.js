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

/*
assertArraysEqual accepts two arrays
console.log a message about whether they are equal or not
*/
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([], []);
assertArraysEqual(["a", "b", "c", "d"],["a", "b", "c", "d"]);
assertArraysEqual(["a", "b", "c", "d"],["a", "b", "c", "c"]);
assertArraysEqual(["a", "d", "c", "d"],["a", "b", "c", "d"]);
assertArraysEqual(["a", "d", "c", "d"], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 4, 5], [1, 2, 3, 4]);
assertArraysEqual([9, 2, 3, 4], [1, 2, 3, 4]);


