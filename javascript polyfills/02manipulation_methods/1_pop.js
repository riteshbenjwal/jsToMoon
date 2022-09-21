/*
pop() removes the last element of the array.

It mutates the original array.

It returns the removed element.
*/

Array.prototype.myPop = function () {
  if (this.length > 0) {
    let lastElement = this[this.length - 1];
    this.length -= 1;
    return lastElement;
  }
};

// Test case 1:
const array = ["a", "b", "c", "d", "e"];
const result = array.myPop();
console.log(result); // "e"
console.log(array); // ["a", "b", "c", "d"];

// Test case 2:
const emptyArray = [];
const result1 = emptyArray.myPop();
console.log(result1); // undefined
console.log(emptyArray); // [];
