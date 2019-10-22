const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  

  it("returns '{}' when passed an empty array", () => {
    assert.deepEqual(countOnly([], {2: true, 1: false, 54: true}), {});
  });

  it("returns '{}' when passed an empty object of items to count", () => {
    assert.deepEqual(countOnly([1, 23, 56, 32, 0, 567], {}), {});
  });

  it("returns '{}' when none of the items to count are in the array", () => {
    assert.deepEqual(countOnly([1, 23, 56, 32, 0, 567], {2: true, 1: false, 54: true}), {});
  });

  it("returns '{Jason: 1, Fang: 2}' for arr: ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'], itemsToCount: {'Jason': true, 'Karima': true, 'Fang': true}", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), {Jason: 1, Fang: 2});
  });

});

