/*

map() method accepts a callback function that executes on every element of the array

it returns a new array

the new array contains the return values of the callback function that is executed on every element of the array

*/

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    const value = cb(this[i], i, this);
    result.push(value);
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];

const result = arr.myMap((el) => el * 2);

console.log(result);
// output: [2, 4, 6, 8, 10];
