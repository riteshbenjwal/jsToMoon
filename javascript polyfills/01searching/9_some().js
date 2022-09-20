/* 

some() method accepts a callback function that executes on every element of the array

it returns true if at least one element in the array returns a truthy value for the callback function provided.

*/

Array.prototype.mySome = function(cb){
   
    for(let i=0; i< this.length; i++){
        if(cb(this[i])){
            return true;
        }
    }

    return false;
}

// Test case 1:
const arr1 = [10, 21, 32, 43, 54, 65];
const hasEven = arr1.mySome((el) => el % 2 === 0);
console.log(hasEven);
// output: true 

// Test case 2:
const arr2 = [10, 20, 30, 40, 50, 60];
const hasOdd = arr2.mySome((el) => el % 2 !== 0);
console.log(hasOdd);
// output: false