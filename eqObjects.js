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
Accepts two objects
Returns true if both objects have identical keys with identical values.
Otherwise returns false
*/

const eqObjects = function(object1, object2) {

};

//TESTS

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};
const cba = {a: 1, b: 2, c: "3"}
const emptyObj = {};
const emptyObj2 = {};

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(abc, cba), false);
assertEqual(eqObjects(emptyObj, abc), false);
assertEqual(eqObjects(emptyObj, emptyObj2), true);

