const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe("#eqArrays", () => {
  
  it("returns true for two empty arrays", () => {
    assert(eqArrays([], []));
  });

  it("returns true for two arrays with identical values at identical indices", () => {
    assert(eqArrays([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]));
  });
  
  it("returns false for two arrays with identical values at different indices", () => {
    expect(eqArrays([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 6, 5])).to.be.false;
  });

  it("returns false for two arrays of different lengths", () => {
    expect(eqArrays([1, 2, 3, 4, 5, 6], [1, 2, 3, 4])).to.be.false;
  });

  it("returns false for two arrays with different values", () => {
    expect(eqArrays([1, 2, 3, 4], ['a', 'b', 'c', 'd'])).to.be.false;
  });

});



