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

/*
Accepts an array and returns its middle-most element(s)
- for arrays with 1 or 2 elements, return []
- for arrays with odd number of elements, return array of a single middle element
- for arrays with even number of elements, return array of two middle elements
*/

const middle = function(arr) {
  let result = [];
  let midIndex = 0;
  let lengthDivByTwo = arr.length / 2;
  if (arr.length < 3) {
    return result;
  } else if (arr.length % 2 !== 0) {
    midIndex = Math.ceil(lengthDivByTwo) - 1;
    result.push(arr[midIndex]);
  } else {
    midIndex = lengthDivByTwo;
    result.push(arr[midIndex - 1], arr[midIndex]);
  }
  return result;
};

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([5, 7, 3]), [7]);
assertArraysEqual(middle([1, 2, 4, 9, 5]), [4]);
assertArraysEqual(middle([1, 9, 5, 4]), [9, 5]);
assertArraysEqual(middle([4, 5, 6, 7, 8, 9]), [6, 7]);
assertArraysEqual(middle(["a", "b", "c", "d", "x"]), ["c"]);
assertArraysEqual(middle(["a", "b", "c", "d"]), ["b", "c"]);


