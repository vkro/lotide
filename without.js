/*
Receives two arrays,
Returns true or false, based on a perfect match.
*/

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let equalSoFar = true;
    for (let i = 0; i < arr1.length; i++) {
      if (equalSoFar === true) {
        if (arr1[i] !== arr2[i]) {
          equalSoFar = false;
        }
      }
    }
    return equalSoFar;
  } else return false;
};

/*
Receives two arrays
Returns console.log indicating whether they are equal or not
*/
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${array1} !== ${array2}`);
  }
};


/*
Receives an array and a value
Returns true if value is in array
False otherwise
*/

const checkSourceForItemToRemove = function(array, val){
  return array.includes(val);
}

/*
Receives two arrays:
- source
- itemsToRemove
Returns a new array with only the elements from source 
that are not present in itemsToRemove.
*/

const without = function(source, itemsToRemove) {
  // create a new array that copies the source array, and will be modified to be the returned array
  let accArray = source;
  // for each of the values in itemsToRemove
  for (let i = 0; i < source.length; i++) {
    // check if the return array includes the itemToRemove
    if (checkSourceForItemToRemove(accArray, itemsToRemove[i])) {
      //if it does, find the index of it in the return array
      let removeIndex = (accArray.indexOf(itemsToRemove[i]));
      //and splice it out of there
      source.splice(removeIndex, 1);
    }
  }
  return accArray;
};

assertArraysEqual(without([], []), []);
assertArraysEqual(without([1, 2, "a"], []), [1, 2, "a"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, "a", "p", 10], ["p", 10]), [1, 2, "a"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
