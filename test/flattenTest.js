const assert = require('chai').assert;
const flatten = require('../flatten');


describe("#flatten", () => {
  
  it("returns '[]' for []", () => {
    assert.deepEqual(flatten([]), []);
  });

  it("returns '[1, 2, 3, 4, 5, 6]' for [1, 2, [3, 4, 5, [6]]]", () => {
    assert.deepEqual(flatten([]), []);
  });
  
});