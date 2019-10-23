/*
Accepts an array of arrays
Returns a flattened version of the array
*/

const flatten = function(arr) {
  let flattenedArray = [];
  for (let item in arr) {
    if (!Array.isArray(item)) {
      flattenedArray.push(item);
    } else for (let nestedItem in item) {
      flattenedArray.push(nestedItem);
    }
  }
  return flattenedArray;
};
// const flatten = function(arr) {
//   let flattenedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     let thisValue = arr[i];
//     if (!Array.isArray(thisValue)) {
//       flattenedArray.push(thisValue);
//     } else for (let n = 0; n < thisValue.length; n++) {
//       let nestedValue = thisValue[n];
//       flattenedArray.push(nestedValue);
//     }
//   }
//   return flattenedArray;
// };

module.exports = flatten;