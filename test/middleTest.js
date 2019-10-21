const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//Tests

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([5, 7, 3]), [7]);
assertArraysEqual(middle([1, 2, 4, 9, 5]), [4]);
assertArraysEqual(middle([1, 9, 5, 4]), [9, 5]);
assertArraysEqual(middle([4, 5, 6, 7, 8, 9]), [6, 7]);
assertArraysEqual(middle(["a", "b", "c", "d", "x"]), ["c"]);
assertArraysEqual(middle(["a", "b", "c", "d"]), ["b", "c"]);