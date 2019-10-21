const assertEqual = require('./assertEqual');  //from Hilda

// Returns everything but the first item of an array

const tail = function(arr) {
  let newArr = [];
  newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;  // from Hilda
