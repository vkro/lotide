const eqArrays = require('./eqArrays');

/*
Accepts two objects
Returns true if both objects have identical keys with identical values.
Otherwise returns false

Two objects are equal when:
- they have the same number of keys
- the value for each key is the same in both objects
*/

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  // if they don't have the same number of keys, return false
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let objectKey of Object.keys(object2)) {                       //else, for each key in obj1
      if (!object2[objectKey]) {                           //if object2 doesn't contain the key return false
        return false;
      } else if (Array.isArray(object2[objectKey])) {     //else, if the key value is an array
        if (!eqArrays(object2[objectKey], object1[objectKey])) { //check if the arrays match
          return false;                             //if not, return false
        }
      } else if (object1[objectKey] !== object2[objectKey]) { //else, check if key values are equal
        return false;                             //if not, return false
      }
    }
  }
  return true; //if the function gets this far, they're identical - return true
};

module.exports = eqObjects;