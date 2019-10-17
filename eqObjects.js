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

Two objects are equal when:
- they have the same number of keys
- the value for each key is the same in both objects
*/

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  // if they don't have the same number of keys, return false
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let key in object2) {  //otherwise for each key in obj1
      if (!object2[key]) { //if object2 doesn't contain the key return false
        return false;
      } else if (object1[key] !== object2[key]) { //otherwise, if key values aren't equal
        return false;                             //return false
      }
    }  
  }
  return true; //if the function gets this far, they're identical - return true
};

//TESTS

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cba = { a: 1, b: 2, c: "3" };
const emptyObj = {};
const emptyObj2 = {};

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(abc, cba), false);
assertEqual(eqObjects(emptyObj, abc), false);
assertEqual(eqObjects(emptyObj, emptyObj2), true);