/*
Receives two values,
Prints a message indicating if they match or not.
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
Receives a string
Returns an object where each unique character in the string
is a property of the object, with a corresponding value
indicating the number of occurences for that character
*/

const countLetters = function(allLetters) {
  //this will be the returned object
  results = {};
  //iterate over the string
  for (let char of allLetters) {
    console.log(char);
  }
  return results;
};


const testLetters = "js for of loop";

const result1 = countLetters(testLetters);

assertEqual(result1["j"], 1);
assertEqual(result1["s"], 1);
assertEqual(result1["f"], 2);
assertEqual(result1["o"], 4);
assertEqual(result1["x"], undefined);