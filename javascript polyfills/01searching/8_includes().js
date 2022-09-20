/*
includes() checks whether the given element is present in the array if it is present, the method returns true, else false.
*/


Array.prototype.myIncludes = function(element, fromIndex= 0){
    for(let i = fromIndex; i<this.length; i++){
        if(this[i] === element){
            return true;
        }
    }
    return false;
}

const arr = ["a", "b", "c", "d", "e", "a"];

// Test case 1:
const result1 = arr.myIncludes("a");
console.log(result1)
// output: true

// Test case 2:
const result2 = arr.myIncludes("z");
console.log(result2)
// output: false