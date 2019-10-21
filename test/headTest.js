const assertEqual = require('../assertEqual');
const head = require('../head');


// TEST CODE
assertEqual(head([0, 1, 2, 3]), 0);
assertEqual(head([1]), 1);
assertEqual(head(["hey", "this", "is", "an", "array"]), "hey");
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), undefined);