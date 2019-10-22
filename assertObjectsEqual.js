const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

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