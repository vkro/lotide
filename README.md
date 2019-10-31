# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my participation in the Web Development Bootcamp at [Lighthouse Labs](https://www.lighthouselabs.ca/). 

## Usage

**Install it:**

`npm install @vkro/lotide`

**Require it:**

`const _ = require('@vkro/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: Returns the first item in an array
* `tail(arr)`: Returns everything but the first item of an array
*  `middle(arr)`: Accepts an array and returns its middle-most element(s)
      - for arrays with 1 or 2 elements, return []
      - for arrays with odd number of elements, return array of a single middle element
      - for arrays with even number of elements, return array of two middle elements
*  `countLetters(str)`: Accepts a string; returns an object where each unique character in the string is a property of the object, with a corresponding value indicating the number of occurences for that character.
*  `countOnly(allItems, itemsToCount)`: Accepts an array strings to count, and an object specifying what to count. Returns an object containing counts of values in the string array that match keys in the object - but only those keys that have a truthy value.
*  `eqArrays(arr1, arr2)`: Accepts two arrays; returns true or false, based on a perfect match. 
*  `eqObjects(obj1, obj2)`: Accepts two objects; returns true if both objects have identical keys with identical values. Otherwise returns false.
*  `findKey(object, callback)`: // Takes an object and callback function; returns first key for which callback returns truthy value. If no key is found, returns undefined.
*  `findKeyByValue(object, value)`: Receives an object and value; return first key in object that contains value. Otherwise, return undefined.
*  `flatten(arr)`: Accepts an array of arrays; returns a flattened version of the array.
*  `letterPosition(string)`: Accepts a string; return an object listing each unique character, with an array of all of its indices in the string, not counting spaces.
*  `map(arr, callback)`: Accepts an array to map, and a callback function. Returns new array based on results of callback.
*  `takeUntil(arr, callback)`: Accepts an array and a callback function; returns a slice of the array, with elements taken from the beginning, until the callback/predicate returns a truthy value. Callback is given only one value - the current item in array.
*  `without(source, itemsToRemove`: Accepts two arrays; returns a new array with only the elements from source array that are not present in itemsToRemove array.
*  `assertEqual(actual, expected`: Accepts two values; prints a message indicating if they match or not.
*  `assertArraysEqual(actual, expected)`: Accepts two arrays; logs a message in the console about whether they are equal or not.
*  `assertObjectsEqual(actual, expected)`: Accepts two objects; console.logs a message about whether they're equal or not.

### Versions

**1.0.2** Remnants of old tests removed, C-style for loops replaced with for...of/in.

**1.0.1** All tests (except those for assert functions) refactored to use Mocha & Chai. 

**1.0.0** A mini clone of the Lodash library with some manual tests.
