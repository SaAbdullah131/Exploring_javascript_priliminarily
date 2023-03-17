// 1.JSON

const student = {
    name:'sakib khan',
    age:40,
    movies:['king khan','Dhakar Mastan']
}
// convert above object to javascript object notation

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj= JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch

fetch('url')
.then(res => res.json())
.then(data => console.log(data));

// Keys, values

const keys = Object.keys(student);
const value= Object.values(student);

// forEach loop inside an array.. when we don't need return 

const numbers =[12,34,56,72,45];
numbers.forEach(num=>console.log(num));
// when we need return 

numbers.map(num=>num*2);

// array like object .. for of use on array like object

// loop on  an object using for in loop


// add or remove from an array
const products = [

    {name:'laptop',price:32000,brand:'len',color:'silver'},
    {name:'mobile',price:42000,brand:'Htc',color:'golden'},
    {name:'watch',price:3000,brand:'casio',color:'yellow'},
    {name:'sunglass',price:300,brand:'rebon',color:'black'},
    {name:'camera',price:12000,brand:'canon',color:'gray'}
]

const newProduct = {name:'webcam',price:900,brand:'lal'};
//copy product array and then  add newProduct 

const newProducts = [...products,newProduct];

// create a new array without one specific item
//remove phone means create a new array without the phone 
const remaining = products.filter(product=>product.name!=='phone');
console.log(remaining);