const countLetters = require('../countLetters');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe("#countLetters", () => {
  
  it("returns an empty object, given an empty string", () => {
    assert.deepEqual(countLetters(""), {});
  });

  it("Returns an object where each unique character in the string is a property of the object, with a corresponding value indicating the number of occurences for that character", () => {
    const testLetters = "js for of loop";
    const expectedResult = {j: 1, s: 1, f: 2, o: 4,  r: 1, l: 1, p: 1};
    
    assert.deepEqual(countLetters(testLetters), expectedResult);
 });

});