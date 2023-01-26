var numbers =[45,68,78,56,89,98];

//1.get element by index;
var element=numbers[1];

console.log(numbers);
console.log(element);

//2. assign using index
 numbers[1]=1000;
console.log(numbers);
// 3.find index of element
var positionIndex=numbers.indexOf(89);
var position =numbers.indexOf(100);

console.log(positionIndex);
console.log(position);