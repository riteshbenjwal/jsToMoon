Array.prototype.myAt = function (index){
   if(index >= 0){
    return this[index];
   }else{
    return this[this.length + index]; 
   }
};



const arr = ["a", "b", "c", "d", "e"];

// Test case 1:
console.log(arr.myAt(3));
//  output: d 

// Test case 2:
console.log(arr.myAt(-1));
// output: e

// Test case 3:
console.log(arr.myAt(7));
// output: undefined