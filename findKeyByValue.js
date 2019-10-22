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


//TESTS

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  soapOpera: "Brooklyn Nine-Nine"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine Nine"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');



module.exports = findKeyByValue;