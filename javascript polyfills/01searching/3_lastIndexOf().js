// lastIndexOf() method accepts an element and returns the last index at which the element is present in the array

Array.prototype.myLastIndexOf = function (
  element,
  fromIndex = this.length - 1
) {
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === element) {
      return i;
    }
  }
  return -1;
};

const arr = ["a", "b", "c", "d", "e", "a"];

// Test case 1:
console.log(arr.myLastIndexOf("a"));
//  output: 5 

// Test case 2:
console.log(arr.myLastIndexOf("z"));
//  output: -1