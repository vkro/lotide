const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  
  it("returns an empty array given an empty array", () => {
    assert(takeUntil([], x => x < 0));
  });

  it("returns slice of an array up to the point where the callback first returns a truthy value", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x % 2 === 0), [1]);
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data2, x => x === ","), ['I\'ve', 'been', 'to', 'Hollywood'])

  });

  it("returns the entire array if the callback never returns a truthy value", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x % 3 === 0), data1);
  });

});