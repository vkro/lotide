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
Receives an array and a value
Pushes the value to the array
*/

const pushToArray = function(arr, val) {
  arr.push(val);
};

/*
Receives a string
Return an object listing each unique character,
with an array of all of its indices (zero-based positions)
in the string, not counting spaces
*/

const letterPosition = function(sentence) {
  let results = {};
  for (i in sentence) {
    i = Number(i); //this loop otherwise returns i as a string in the final array
    let char = sentence[i];
    if (char !== " ") {
      if (!results[char]) {
        results[char] = [];
      }
      pushToArray(results[char], i);
    }
  }
  return results;
};

const testLetters = "hello";
const result1 = letterPosition(testLetters);
console.log(result1);

// TEST CODE
assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['e'], [1]);
assertArraysEqual(result1['l'], [2, 3]);
assertArraysEqual(result1['o'], [4]);