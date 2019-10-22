const assertArraysEqual = require('./assertArraysEqual');

/*
Receives an array and a value
Returns true if value is in array
False otherwise
*/

const checkSourceForItemToRemove = function(array, val){
  return array.includes(val);
}

/*
Accepts two arrays:
- source
- itemsToRemove
Returns a new array with only the elements from source 
that are not present in itemsToRemove.
*/

const without = function(source, itemsToRemove) {
  let accArray = source;                                             // accumulator array for return value
  for (let i = 0; i < source.length; i++) {                          // for each of the values in itemsToRemove
    if (checkSourceForItemToRemove(accArray, itemsToRemove[i])) {    // check if the return array includes the itemToRemove
      let removeIndex = (accArray.indexOf(itemsToRemove[i]));        // if it does, get the index of it in the return array
      source.splice(removeIndex, 1);                                 // and splice it out of there
    }
  }
  return accArray;
};

// TESTS

assertArraysEqual(without([], []), []);
assertArraysEqual(without([1, 2, "a"], []), [1, 2, "a"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, "a", "p", 10], ["p", 10]), [1, 2, "a"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


module.exports = without;
module.exports = checkSourceForItemToRemove;