/*
Receives a string
Returns an object where each unique character in the string
is a property of the object, with a corresponding value
indicating the number of occurences for that character
*/

const countLetters = function(allLetters) {
  //this will be the returned object
  let results = {};
  //iterate over the string
  for (let char of allLetters) {
    if (char !== " ") {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }
  return results;
};