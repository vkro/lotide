const assertEqual = require('./assertEqual');

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


// TESTS

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 7), undefined);

const ab = { a: "1", b: "2" };
const cba = { a: 1, b: 2, c: "32" };
const emptyObj = {};

assertEqual(findKey(ab, x => x % 2 === 0), "b");
assertEqual(findKey(cba, x => x.length === 2), "c");
assertEqual(findKey(emptyObj, x => x === "anything"), undefined);


module.exports = findKey;