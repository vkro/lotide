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
  return results;
};

module.exports = takeUntil;