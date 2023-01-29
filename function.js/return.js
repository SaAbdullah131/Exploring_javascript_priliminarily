// function return in js..

function add(num1,num2) {
    console.log(num1,num2);
    var sum = num1+ num2;
    return sum;
}

var addition =add(10,9);
console.log(addition);

function bringSingra(money){
    var singaraPrice=10;
    var quantity = (money/singaraPrice);
    return quantity;
}
var myTaka=150;
var singaras = bringSingra(myTaka);
console.log("Eating Singaras ",singaras);
