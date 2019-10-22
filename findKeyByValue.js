const assertEqual = require('./assertEqual');

/*
Receives an object and value
Return first key in object that contains value
Otherwise, return undefined
*/

const findKeyByValue = function(obj, value) {
  for (let objectKey of Object.keys(obj)) {
    if ((obj[objectKey]) === value) {
      return objectKey;
    }
  }
};

module.exports = findKeyByValue;