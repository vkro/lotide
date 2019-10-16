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

/* 
Receives an array of arrays
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


assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
