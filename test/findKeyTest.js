const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  
  it("returns undefined when passed an empty object", () => {
    assert.deepEqual(findKey({}, x => x < 0), undefined);
  });

  it("returns first key in object for which callback returns truthy value.", () => {
    const planets = {"Blue Hill": { stars: 1 },
                     "Akaleri": { stars: 3 },
                     "noma": { stars: 2 },
                     "elBulli": { stars: 3 },
                     "Ora": { stars: 2 },
                     "Akelarre": { stars: 3 }
                    };

    assert.deepEqual(findKey(planets, x => x.stars === 2), 'noma');
    assert.deepEqual(findKey(planets, x => x.stars === 3), 'Akaleri');
  });

  it("returns undefined if no key in object for which callback returns truthy value", () => {
    const obj = { a: "1", b: "2" };
    assert.deepEqual(findKey(obj, x => x % 3 === 0), undefined);
  });

});
