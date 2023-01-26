// push or pop in javascript

var numbers=[12,3443,45,109];
// push into that array as last element of array.. an update the array length;

numbers.push(190);
console.log(numbers);

var friends=["balam","islam","Salam","kalam"];
friends.push("Rion");
friends.unshift("Mukter");

console.log(friends);

// pop remove element from array

var gpa=[3.42,3.89,3,69,3,60];
console.log(gpa);
// gpa.pop();
// var elementPop=gpa.pop();// remove last element 
var elementFirst=gpa.shift();
// console.log(elementPop);
console.log(elementFirst);