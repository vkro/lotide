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