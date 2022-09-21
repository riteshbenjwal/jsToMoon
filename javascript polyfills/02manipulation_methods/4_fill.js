/*
fill() fills or replaces elements in an array with a given value.

It accepts three arguments: value, start, and, end.

It fills the elements between start and end with the given value.
*/

Array.prototype.myFill = function (value, start = 0, end = this.length) {
  if (start < 0) {
    start = this.length + start;
  }

  if (end < 0) {
    end = this.length + start;
  }

  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
};

// Test case 1:
const arr1 = ["a", "b", "c", "d", "e"];
const result1 = arr1.myFill("*");
console.log(result1);
// ["*", "*", "*", "*", "*"];

// Test case 2:
const arr2 = ["a", "b", "c", "d", "e"];
const result2 = arr2.myFill("*", 1);
console.log(result2);
// ["a", "*", "*", "*", "*"];

// Test case 3:
const arr3 = ["a", "b", "c", "d", "e"];
const result3 = arr3.myFill("*", 1, 3);
console.log(result3);
// ["a", "*", "*", "d", "e"];

// Test case 4:
const arr4 = ["a", "b", "c", "d", "e"];
const result4 = arr4.myFill("*", -4, -1);
console.log(result4);
// ["a", "*", "*", "*", "e"];
