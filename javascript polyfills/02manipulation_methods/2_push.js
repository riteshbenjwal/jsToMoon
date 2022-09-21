/*

push() adds elements to the end of the array.
It mutates the original array.
It returns the new length of the array.

*/

Array.prototype.myPush = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};


const array = ["a", "b", "c", "d", "e"];
const result = array.myPush("z", "y", "p");

console.log(result)
// 8

console.log(array)
// ["a", "b", "c", "d", "e", "z", "y", "p"];