const assertEqual = require('./assertEqual');  //from Hilda


const tail = function(arr) {
  let newArr = [];
  newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;  // from Hilda
