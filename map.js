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

// Takes 2 arguments:
// - an array to map
// - a callback function
// Returns new array based on results of callback

const words = ['sneezed', 'on', 'the', 'beat', 'and', 'the', 'beat', 'got', 'sicker']; 

const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(map(words, word => word.length), [7, 2, 3, 4, 3, 3, 4, 3, 6]);
assertArraysEqual(map(words, word => word[0]), ['s', 'o', 't', 'b', 'a', 't', 'b', 'g', 's']);
assertArraysEqual(map([], x => x * 3), []);
assertArraysEqual(map([1, 2, 3, 0], x => x * 3), [3, 6, 9, 0]);
assertArraysEqual(map(['heeler', 'corgi', 'labradoodle'], word => `${word}s`), ['heelers', 'corgis', 'labradoodles']);
assertArraysEqual(map([1, 2, 3, 0], x => x.toString()), ['1', '2', '3', '0']);
