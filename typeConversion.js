// type conversion in js  or typecasting

var price1="31";
var price2="50"; // these are counted as a string in javascript 

var totalPrice =price1 + price2;

console.log(totalPrice);
var price1="31";
var price2=50; // one string and one number 
var totalPrice1 =price1 + price2;

console.log(totalPrice1);

var price1=31;
var price2 ="50"; // here also one string and one number 
var totalPrice2=price1+price2;

console.log(totalPrice2);

// convert string to number
var Price2Number=parseInt(price2);
console.log(Price2Number);

var gpa=3.60;
var gapNumber=parseInt(gpa);
console.log(gapNumber); // just give 3 cause 3 integer and .60 in floating number..
var gap1Number=parseFloat(gpa);

console.log(gap1Number);
