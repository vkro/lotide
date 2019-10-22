const assertArraysEqual = require('./assertArraysEqual');

/*
Accepts an array and a value
Pushes the value to the array
*/

const pushToArray = function(arr, val) {
  arr.push(val);
};

/*
Accepts a string
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

// TESTS

const testLetters = "hello";
const result1 = letterPosition(testLetters);
console.log(result1);

assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['e'], [1]);
assertArraysEqual(result1['l'], [2, 3]);
assertArraysEqual(result1['o'], [4]);

module.exports = letterPosition;
module.exports = pushToArray;