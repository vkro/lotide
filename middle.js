/*
Accepts an array and returns its middle-most element(s)
- for arrays with 1 or 2 elements, return []
- for arrays with odd number of elements, return array of a single middle element
- for arrays with even number of elements, return array of two middle elements
*/

const middle = function(arr) {
  let result = [];
  let midIndex = 0;
  let lengthDivByTwo = arr.length / 2;
  if (arr.length < 3) {
    return result;
  } else if (arr.length % 2 !== 0) {
    midIndex = Math.ceil(lengthDivByTwo) - 1;
    result.push(arr[midIndex]);
  } else {
    midIndex = lengthDivByTwo;
    result.push(arr[midIndex - 1], arr[midIndex]);
  }
  return result;
};

module.exports = middle;


