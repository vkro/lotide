const assertEqual = require('./assertEqual');

/*
Receives two arrays,
Returns true or false, based on a perfect match.
*/

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {

    let equalSoFar = true;
    
    arr1.forEach((item, index) => {
      if (equalSoFar === true) {
        if (arr1[index] !== arr2[index]) {
          equalSoFar = false;
        }
      }
    })
    
    return equalSoFar;
  
  } else return false;
};

module.exports = eqArrays;