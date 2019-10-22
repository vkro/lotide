const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays(["a", "b", "c", "d"],["a", "b", "c", "d"]), true);
assertEqual(eqArrays(["a", "b", "c", "d"],["a", "b", "c", "c"]), false);
assertEqual(eqArrays(["a", "d", "c", "d"],["a", "b", "c", "d"]), false);
assertEqual(eqArrays(["a", "d", "c", "d"], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 4, 5], [1, 2, 3, 4]), false);
assertEqual(eqArrays([9, 2, 3, 4], [1, 2, 3, 4]), false);