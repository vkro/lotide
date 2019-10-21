const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  
  it("returns '[]' for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns '[]' for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns '[1, 2, 3]' for [0, 1, 2, 3]", () => {
    assert.deepEqual(tail([0, 1, 2, 3]), [1, 2, 3]);
  });

  it("returns '['this', 'is', 'an', 'array']' for ['hey', 'this', 'is', 'an', 'array']", () => {
    assert.deepEqual(tail(['hey', 'this', 'is', 'an', 'array']), ['this', 'is', 'an', 'array']);
  });

});