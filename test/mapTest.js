const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  
  it("returns an empty array when passed an empty array", () => {
    assert.deepEqual(map([], x => x < 0), []);
  });

  it("applies callback to each item of array, returns new array containing transformed values", () => {
    const words = ['sneezed', 'on', 'the', 'beat', 'and', 'the', 'beat', 'got', 'sicker']; 

    assert.deepEqual(map(words, word => word[0]), ['s', 'o', 't', 'b', 'a', 't', 'b', 'g', 's']);
    assert.deepEqual(map([1, 2, 3, 0], x => x * 3), [3, 6, 9, 0]);
    assert.deepEqual(map(['heeler', 'corgi', 'labradoodle'], word => `${word}s`), ['heelers', 'corgis', 'labradoodles']);
    assert.deepEqual(map([1, 2, 3, 0], x => x.toString()), ['1', '2', '3', '0']);
  });

});