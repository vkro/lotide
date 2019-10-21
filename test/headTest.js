const assert = require('chai').assert;
const head = require('../head');


describe("#head", () => {
  
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns '0' for [0, 1, 2, 3]", () => {
    assert.strictEqual(head([0, 1, 2, 3]), 0); 
  });

  it("returns 'hey' for ['hey', 'this', 'is', 'an', 'array']", () => {
    assert.strictEqual(head(['hey', 'this', 'is', 'an', 'array']), "hey"); 
  });

  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined); 
  });

});