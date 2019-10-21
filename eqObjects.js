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
    for (let objectKey of Object.keys(object2)) {                       //else, for each key in obj1
      if (!object2[objectKey]) {                           //if object2 doesn't contain the key return false
        return false;
      } else if (Array.isArray(object2[objectKey])) {     //else, if the key value is an array
        if (!eqArrays(object2[objectKey], object1[objectKey])) { //check if the arrays match
          return false;                             //if not, return false
        }
      } else if (object1[objectKey] !== object2[objectKey]) { //else, check if key values are equal
        return false;                             //if not, return false
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

const cd = {c: "1", d: ['2', 3]};
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);