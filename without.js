/*
Receives an array and a value
Returns true if value is in array
False otherwise
*/

const checkSourceForItemToRemove = function(array, val) {
  return array.includes(val);
};

/*
Accepts two arrays:
- source
- itemsToRemove
Returns a new array with only the elements from source
that are not present in itemsToRemove.
*/

const without = function(source, itemsToRemove) {
  let accArray = source;                               // accumulator array for return value
  for (const item of itemsToRemove) {                  // for each of the values in itemsToRemove
    if (checkSourceForItemToRemove(accArray, item)) {  // check if the return array includes the itemToRemove
      let removeIndex = (accArray.indexOf(item));      // if it does, get the index of it in the return array
      accArray.splice(removeIndex, 1);                 // and splice it out of there
    }
  }
  return accArray;
};

module.exports = without;
