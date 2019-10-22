const eqObjects = require('../eqObjects');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe("#eqObjects", () => {
  
  it("returns true for two empty objects", () => {
    assert(eqObjects({}, {}));
  });

  it("returns true for two objects with identical values at identical indices in the same order", () => {
    assert(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2" }));
  });
  
  it("returns true for two objects with identical values at identical indices in a different order", () => {
    assert(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }));
  });

  it("returns false for two objects with different keys", () => {
    expect(eqObjects({ a: "1", b: "2" }, { x: "3", a: "1" })).to.be.false;
  });

  it("returns false for two objects with same keys but different values", () => {
    expect(eqObjects({ a: "1", b: "2" }, { b: "3", a: "1" })).to.be.false;
  });

  it("returns false for two objects, when only one is empty", () => {
    expect(eqObjects({ a: "1", b: "2" }, {})).to.be.false;
  });

});