/*

reverse() method reverses the array. 

It mutates the original array and returns the reversed array

*/

Array.prototype.myReverse = function () {
  let start = 0,
    end = this.length - 1;

  while (start < end) {
    let temp = this[start];
    this[start] = this[end];
    this[end] = temp;
    start++;
    end--;
  }

  return this;
};

const arr = [1, 2, 3, 4, 5];
const result = arr.myReverse();

console.log(arr); // [5, 4, 3, 2, 1]
console.log(result); // [5, 4, 3, 2, 1]
