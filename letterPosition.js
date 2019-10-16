/*
Receives two values,
Prints a message indicating if they match or not.
*/

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
Receives a string
Return an object listing each unique character,
with an array of all of its indices (zero-based positions)
in the string
*/

const letterPosition = function(sentence) {
  let results = {};
  //logic to update results
  return results;
};

const testLetters = "how about this string how does this work";

console.log("**** The result of calling countLetters on testLetters *****");
const result1 = countLetters(testLetters);
console.log(result1);
console.log("****** End of result, now for tests ******");


assertEqual(result1["h"], [0, 11, 22]);
assertEqual(result1["s"], [13, 15, 29]);
assertEqual(result1["x"], undefined);