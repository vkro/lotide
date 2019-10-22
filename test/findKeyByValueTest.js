const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe("#findKeyByValue", () => {
  
  it("returns 'undefined' when object doesn't contain the given value", () => {
    assert.deepEqual(findKeyByValue({1: 'a', 2: 'b'}, 'c'), undefined);
  });

  it("returns first key in object containing the given value", () => {

    const bestTVShowsByGenre = {
       sciFi: "The Expanse",
       comedy: "Brooklyn Nine-Nine",
       drama:  "The Wire",
       soapOpera: "Brooklyn Nine-Nine"
     }
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine Nine"), undefined);
  });
  
});