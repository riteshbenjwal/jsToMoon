/*
unshift() adds elements to the start of the array.

It mutates the original array.

It returns the new length of the array.
*/

Array.prototype.myUnshift = function () {
  if (arguments.length > 0) {
    //Move elements
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }

    // add args element to start

    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }

  return this.length;
};

const array = ["a", "b", "c", "d", "e"];
const result = array.myUnshift("z", "y", "p");

console.log(result);
// 8

console.log(array);
// ["z", "y", "p", "a", "b", "c", "d", "e"];
