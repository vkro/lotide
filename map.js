const assertArraysEqual = require('./assertArraysEqual');

// Accepts 2 arguments:
// - an array to map
// - a callback function
// Returns new array based on results of callback

const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};


// TESTS
const words = ['sneezed', 'on', 'the', 'beat', 'and', 'the', 'beat', 'got', 'sicker']; 
const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(map(words, word => word.length), [7, 2, 3, 4, 3, 3, 4, 3, 6]);
assertArraysEqual(map(words, word => word[0]), ['s', 'o', 't', 'b', 'a', 't', 'b', 'g', 's']);
assertArraysEqual(map([], x => x * 3), []);
assertArraysEqual(map([1, 2, 3, 0], x => x * 3), [3, 6, 9, 0]);
assertArraysEqual(map(['heeler', 'corgi', 'labradoodle'], word => `${word}s`), ['heelers', 'corgis', 'labradoodles']);
assertArraysEqual(map([1, 2, 3, 0], x => x.toString()), ['1', '2', '3', '0']);


module.exports = map;