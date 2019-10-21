const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  
  it("returns '[]' for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns '[]' for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns '[]' for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns '[7]' for [5, 7, 3]", () => {
    assert.deepEqual(middle([5, 7, 3]), [7]);
  });

  it("returns '[4]' for [1, 9, 5, 4]", () => {
    assert.deepEqual(middle([1, 9, 5, 4]), [9, 5]);
  });

  it("returns '[6, 7]' for [4, 5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([4, 5, 6, 7, 8, 9]), [6, 7]);
  });

  it("returns '['c']' for ['a', 'b', 'c', 'd', 'x']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'x']), ['c']);
  });

  it("returns '['b', 'c']' for ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);
  });

});