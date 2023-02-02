// Calculate the total cost the products in a shopping cart..

const shoppingCart = [

    {name:"shoes",price:1200},
    {name:"shirt",price:2200},
    {name:"pants",price:3700},
    {name:"belts",price:600}
];

function totalCost(products) {
    let sum =0;
    for(let i=0;i<products.length;i++) {
        sum = sum + products[i].price;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log("Total Expense Today: ",expense);