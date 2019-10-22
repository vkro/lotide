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

module.exports = map;