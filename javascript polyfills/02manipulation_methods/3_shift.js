/*

shift() removes the first element of the array.

It mutates the original array.

It returns the removed element.

*/

Array.prototype.myShift = function () {
  if (this.length > 0) {
    const firstEl = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    this.length -= 1;
    return firstEl;
  }
};

// Test case 1:
const array = ["a", "b", "c", "d", "e"];
const result = array.myShift();
console.log(result); // "a"
console.log(array); // ["b", "c", "d", "e"];

// Test case 2:
const emptyArray = [];
const result1 = emptyArray.myShift();
console.log(result1); // undefined
console.log(emptyArray); // [];
