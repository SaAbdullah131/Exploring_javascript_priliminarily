// object in javascript 


// object declaration
const student ={
    id:115,
    name:"Rion Al Noman",
    class:9,
    marks:98
}
var mobile ={
    brand:"samsung",
    price:19000,
    Storage:"64gb",
    camera:"7MP"
}
const myComputer ={
    brand:"Dell",
    price:25000,
    color:"Black",
    Processor:"i7"
}
console.log(myComputer);
// update value of myComputer object using it's keys..
myComputer.Processor="i79";
console.log(myComputer);

console.log("\n");

console.log(myComputer.price);
console.log(mobile.brand);
// all keys of mobile object 
console.log("\n");
console.log(Object.keys(mobile));
// all values of mobile object

console.log(Object.values(mobile));