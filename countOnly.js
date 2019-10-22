const assertEqual = require('./assertEqual');

/*
Receives an array strings to count, and an object specifying what to count.
Returns an object containing counts of values in the string array that
match keys in the object - but only those keys that have a truthy value.
*/

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;