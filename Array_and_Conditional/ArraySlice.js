var number=[11,22,33,44,55,66,77,80];

var Slicing =number.splice(2,5);
var index =0;

console.log("Slicing Items is: ",Slicing);

console.log("\n");

console.log(number);

while(index < number.length){
    console.log(number[index]);
    index++;
}