//copyWithin() copies a portion of the array to another location within the same array. It accepts three arguments: target, start, and end.

Array.prototype.myCopyWithin = function (
  target = 0,
  start = 0,
  end = this.length
) {
  if (target < 0) {
    target = this.length + target;
  }

  if (start < 0) {
    start = this.length + start;
  }

  if (end < 0) {
    end = this.length + end;
  }

  for (let i = start; i < end && target < this.length; i++) {
    this[target] = this[i];
    target++;
  }

  return this;
};

// Test Case 1:
const array1 = ["a", "b", "c", "d", "e"];
array1.myCopyWithin(4);
console.log(array1);
// output: ['a', 'b', 'c', 'd', 'a']

const array2 = ["a", "b", "c", "d", "e"];
array2.myCopyWithin(3, 1);
console.log(array2);
// output: ['a', 'b', 'c', 'b', 'c']

const array3 = ["a", "b", "c", "d", "e", "f"];
array3.myCopyWithin(0, 3, 5);
console.log(array3);
// output: ['d', 'e', 'c', 'd', 'e', 'f']
