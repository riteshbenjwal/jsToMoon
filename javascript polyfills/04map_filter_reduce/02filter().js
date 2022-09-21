/*

filter() method accepts a callback function that executes on every element of the array

it returns a new array

the new array contains only those elements for which the callback function returns a truthy value

*/
Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];

const result = arr.myFilter((el) => el % 2 === 0);

console.log(result);
// output: [2, 4];
