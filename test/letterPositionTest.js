const assert = require('chai').assert;
const letterPosition = require('../letterPosition');


describe("#letterPosition", () => {
  
  it("returns an empty object, given an empty string", () => {
    assert.deepEqual(letterPosition(""), {});
  });

  it("returns '{h: [0], e: [1], l: [2, 3], o: [4]}' for 'hello'", () => {
    assert.deepEqual(letterPosition("hello"), {h: [0], e: [1], l: [2, 3], o: [4]});
  });
  
});

// TESTS

// const testLetters = "hello";
// const result1 = letterPosition(testLetters);
// console.log(result1);
// 
// assertArraysEqual(result1['h'], [0]);
// assertArraysEqual(result1['e'], [1]);
// assertArraysEqual(result1['l'], [2, 3]);
// assertArraysEqual(result1['o'], [4]);