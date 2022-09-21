/* 
reduceRight() is the same as the reduce() method, the only difference being that it executes the reducer function backward from the last element of the array.
*/

Array.prototype.myReduceRight = function (cb, initialValue) {
  let result;
  let startIndex = this.length - 1;

  if (arguments.length <= 1) {
    results = this[this.length - 1];
    startIndex = this.length - 2;
  }

  if (arguments.length >= 2) {
    result = initialValue;
  }

  for (let i = startIndex; i >= 0; i--) {
    result = cb(result, this[i]);
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];

// Test case 1:
const sum = arr.myReduceRight((prev, curr) => prev + curr);
console.log(sum);
// output: 15

// Test case 2:
const oddEvenCount = arr.myReduceRight(
  (prev, curr) =>
    curr % 2 == 0
      ? { ...prev, even: prev.even + 1 }
      : { ...prev, odd: prev.odd + 1 },
  { even: 0, odd: 0 }
);
console.log(oddEvenCount);
// output: {even: 2, odd: 3};
