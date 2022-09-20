//indexOf() method accepts an element and returns the first index at which the element is present in the array


Array.prototype.myIndexOf =function(element, fromIndex=0){

     for(let i = fromIndex; i< this.length; i++){
        if(this[i]=== element){
            return i;
        }
     }

     return -1;
};

const arr = ["a", "b", "c", "d", "e", "a"];

// Test case 1:
console.log(arr.myIndexOf("a"));
//  output: 0 

// Test case 2:
console.log(arr.myIndexOf("z"));
// output: -1