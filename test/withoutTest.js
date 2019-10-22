const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
  
  it("returns an empty array given an empty array", () => {
    assert.deepEqual(without([], [1, 2, 3]), []);
  });

  it("returns entire array when array doesn't contain any of the items to remove", () => {
    assert.deepEqual(without([1, 2, "a"], []), [1, 2, "a"]);
  });
  
  it("returns array minus values from items to remove array", () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ['hello', 'world']);
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
    assert.deepEqual(without([1, 2, "a", "p", 10], ["p", 10]), [1, 2, "a"]);
  });

});