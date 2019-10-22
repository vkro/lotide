// Takes an object and callback function
// Returns first key for which callback returns truthy value.
// If no key is found, returns undefined.

const findKey = function(object, callback) {    // initially used for ... in -- feedback is that's not used anymore, switched to for...of
  for (let objectKey of Object.keys(object)) {  // Object.keys gets list of keys in object. For each one,
    if (callback(object[objectKey])) {          // If it returns a truthy value from callback
      return objectKey;                         // Return that key
    }
  }
};

module.exports = findKey;