// swaping values using temp variable 
let first = 5; 
let second = 7;
console.log(first,second);
//this wrong approach
// first  = second;
// second = first;

// Approach : 1
let temp=first;
first = second;
second = temp;

// Approach :2 --destructuring es6
[first,second] =[second,first];

console.log(first,second);