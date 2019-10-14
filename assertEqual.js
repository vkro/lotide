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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "1");
assertEqual("hello world", "hello world");
assertEqual("hello world ", "hello world");
assertEqual("hello world", "Hello world");
assertEqual(10, 10.00);
assertEqual(0, "");
assertEqual(0, " ");
assertEqual(NaN, "hi");
assertEqual((2 * 2), 4);