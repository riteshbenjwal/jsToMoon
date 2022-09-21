/*

sort() method sorts the array.

By default, it converts the elements to strings and sorts them in ascending order.

We can provide a comparator function to sort the elements in a custom order.

*/

function defaultComparator(a, b) {
  a = a.toString();
  b = b.toString();

  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

Array.prototype.mySort = function (cb = defaultComparator) {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
        
      if (cb(this[i], this[j]) > 0) {
        let swap = this[i];
        this[i] = this[j];
        this[j] = swap;
      }
    }
  }
};

// Test case 1:
const arr = [30, 55, 1, 3, 66, 22];
arr.mySort();
console.log(arr);
// output: [1, 22, 3, 30, 55, 66];

// Test case 1:
const arr1 = [30, 55, 1, 3, 66, 22];
arr1.mySort((a, b) => a - b);
console.log(arr1);
// output: [1, 3, 22, 30, 55, 66];
