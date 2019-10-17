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
    for (let key in object2) {                       //else, for each key in obj1
      if (!object2[key]) {                           //if object2 doesn't contain the key return false
        return false;
      } else if (Array.isArray(object2[key])) {     //else, if the key value is an array
        if (!eqArrays(object2[key], object1[key])) { //check if the arrays match
          return false;                             //if not, return false
        }
      } else if (object1[key] !== object2[key]) { //else, check if key values are equal
        return false;                             //if not, return false
      }
    }
  }
  return true; //if the function gets this far, they're identical - return true
};

/*
Accepts two objects
Console.logs a message about whether they're equal or not
*/

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


//TESTS

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cba = { a: 1, b: 2, c: "3" };
const emptyObj = {};
const emptyObj2 = {};

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(abc, cba);
assertObjectsEqual(emptyObj, abc);
assertObjectsEqual(emptyObj, emptyObj2);

const cd = {c: "1", d: ['2', 3]};
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);