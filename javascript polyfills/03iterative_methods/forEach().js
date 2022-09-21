/*
forEach() accepts a callback function and executes it on every element.

returns undefined

the callback function is not invoked on uninitialized elements

*/

Array.prototype.myForEach = function(cb){
  for(let i=0; i< this.length; i++){
    if(typeof this[i] !== 'undefined'){
        cb(this[i],i,this);
    }
  }
}


// Test case 1:
const arr = ["a", "b", "c"];

arr.myForEach((element, index) => console.log({[index]: element}));
// output:
// {0: 'a'}
// {1: 'b'}
// {2: 'c'}

console.log('------ End ------')

// Test case 2:
const arr1 = ["a", , "c"];


arr1.myForEach((element, index) => console.log({[index]: element}));
// output:
// {0: 'a'}
// {2: 'c'}
