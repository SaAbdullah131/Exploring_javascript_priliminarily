// array method in js

const products = [

    {name:'laptop',price:32000,brand:'lenovo',color:'silver'},
    {name:'mobile',price:42000,brand:'iphone',color:'golden'},
    {name:'watch',price:3000,brand:'casio',color:'yellow'},
    {name:'sunglass',price:300,brand:'rebon',color:'black'},
    {name:'camera',price:12000,brand:'canon',color:'gray'}
]
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

products.forEach(products=>console.log(products.color));

products.forEach(products=> {

})

// 3.filter .. filter return an array
const cheap = products.filter(products=> products.price <= 5000);
console.log(cheap);

const specificName = products.filter(product=> product.name.includes('n'));
const specificNameStart = products.filter(product=> product.name.startsWith('s'));
console.log(specificName);
console.log(specificNameStart);

// find ..You will get an Object
const special = products.find(productName => productName.name.includes('n'));
console.log(special);