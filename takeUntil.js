const assertArraysEqual = require('./assertArraysEqual');


// Takes 2 parameters:
// - array
// - callback (Lodash calls this the "predicate")
// Returns a slice of the array, with elements taken
// from the beginning, until the callback/predicate
// returns a truthy value.
// Callback is given only one value - the current item in array


const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else results.push(item);
  }
};

// TESTS

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ","), ['I\'ve', 'been', 'to', 'Hollywood']);

module.exports = takeUntil;