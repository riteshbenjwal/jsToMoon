/*
find() method accepts a callback testing function which is executed on every element of the array.

The first element in the given array that fulfills the testing function is returned by the find() method.
*/

Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
};

const arr = [10, 20, 31, 44, 55, 67];

const result1 = arr.myFind((element) => {
  return element % 20 === 0;
});

console.log(result1);

// output: 20

const result2 = arr.myFind((element) => element % 3 === 0);
console.log(result2);

// output: undefined