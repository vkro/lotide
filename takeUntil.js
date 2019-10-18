/*
Receives two arrays,
Returns true or false, based on a perfect match.
*/

const eqArrays = function (arr1, arr2) {
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
Receives two arrays
Logs a message in the console about whether they are equal or not
*/
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// Takes 2 parameters:
// - array
// - callback (Lodash calls this the "predicate")
// Returns a slice of the array, with elements taken
// from the beginning, until the callback/predicate
// returns a truthy value.
// Callback is giben only one value - the current item in array


const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else results.push(item);
  }
};

/*
const takeUntil = function (array, callback) {
  const results = [];
  array.forEach(function (item) {
    if (callback(item)) {
      return results;
    } else results.push(item);
  })
};
*/

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ","), ['I\'ve', 'been', 'to', 'Hollywood']);
