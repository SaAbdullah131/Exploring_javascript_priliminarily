




const numbers = [45,65,23,98,19];

// for(let i = 0 ;i<numbers.length;i++) {
//     console.log(numbers[i]);
// }
// console.log("\n");

// for of loop
for(const number of numbers) {
    console.log(number);
}

const products = [
    {id:1,name:"Xiami phone One Night",price: 19000},
    {id:2,name:"IPhone",price: 129000},
    {id:3,name:"MackBook",price: 19000},
    {id:4,name:"Lenovo Yoga laptop",price: 45000},
    {id:5,name:"Dell Inspiron Laptop",price: 39000},
    {id:6,name:"Samsung note 7 phone",price: 19000},
    {id:7,name:"Nokia old Age phone gone",price: 19000},
    {id:8,name:"One Plus Phone",price: 19000}
]
// for(const product of products) {
//     console.log(product);
// }
console.log('\n');
function matchedProducts (products,search) {
    const matched = [];
    for(const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result1 =  matchedProducts(products,"phone");
console.log(result1);