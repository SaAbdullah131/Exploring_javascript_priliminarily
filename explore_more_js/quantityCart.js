// 
const shoppingCart = [

    {name:"shoes",price:1200,      quantity:2},
    {name:"shirt",price:22000,quantity:5},
    {name:"pants",price:3700,quantity:4},
    {name:"belts",price:60 ,quantity:3}
];

function totalCost(products) {
    let sum = 0;
    for(let i=0;i<products.length;i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log("Total Expense Today: ",expense);