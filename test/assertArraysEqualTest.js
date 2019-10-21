const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([], []);
assertArraysEqual(["a", "b", "c", "d"],["a", "b", "c", "d"]);
assertArraysEqual(["a", "b", "c", "d"],["a", "b", "c", "c"]);
assertArraysEqual(["a", "d", "c", "d"],["a", "b", "c", "d"]);
assertArraysEqual(["a", "d", "c", "d"], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 4, 5], [1, 2, 3, 4]);
assertArraysEqual([9, 2, 3, 4], [1, 2, 3, 4]);
