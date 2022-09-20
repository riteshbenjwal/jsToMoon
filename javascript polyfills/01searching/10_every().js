/*
every() method accepts a callback function that executes on every element of the array

It returns true if every element in the array returns a truthy value for the callback function provided
*/


Array.prototype.myEvery = function (cb) {
    for (let i = 0; i < this.length; i++) {
      if (!cb(this[i])) {
        return false;
      }
    }
    return true;
  };

  // Test case 1
const arr1 = [10, 20, 30, 40, 50, 60];
const isAllEven = arr1.myEvery((el) => el % 2 === 0)
console.log(isAllEven);
// output: true 

// Test case 2
const arr2 = [10, 21, 30, 41, 50, 60];
const isAllEven1 = arr2.myEvery((el) => el % 2 === 0)
console.log(isAllEven1);
// output: false

// Test case 3
const arr3 = [11, 21, 30, 41, 51, 61];
const isAllEven2 = arr3.myEvery((el) => el % 2 === 0)
console.log(isAllEven2);
// output: false