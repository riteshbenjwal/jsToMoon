/*

reduce() method accepts a callback function called the reducer.

The reducer is executed on every element of the array and reduces it to a single value.

The reducer function has four arguments: previous value, current value, the current index, and the array

*/

Array.prototype.myReduce = function (cb, initialValue) {
  let result;
  let startIndex = 0;

  if (arguments.length >= 1) {
    results = this[0];
    startIndex = 1;
  }

  if (arguments.length >= 2) {
    result = initialValue;
  }

  for (let i = startIndex; i < this.length; i++) {
    console.log("element is", this[i]);
    result = cb(result, this[i]);
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];

// Test case 1:
const sum = arr.myReduce((prev, curr) => prev + curr);
console.log(sum);
// output: 15

// Test case 2:
const oddEvenCount = arr.myReduce(
  (prev, curr) => {
    if (curr % 2 == 0) {
      return {
        ...prev,
        even: prev.even + 1,
      };
    } else {
      return { ...prev, odd: prev.odd + 1 };
    }
  },
  { even: 0, odd: 0 }
);
console.log(oddEvenCount);
// output: {even: 2, odd: 3};
