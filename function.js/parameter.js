// function parameter in js

function bringSingra(money){
    if(money>5){
        console.log("Singara Pabi");
    }else {
        console.log("Tui Sigara Pabi na");
    }
    
    console.log(money);
}
var taka=200;
bringSingra(2);
console.log("\n");
bringSingra(taka);
bringSingra();

function sum(a,b){
    var add=a+b;
    console.log(add);
}
sum(10,20);

function addition(a,b,c,d){
    console.log(a,b,c,d);
    var sum=a+b+c+d;
    console.log(sum);
}
addition();
addition(5,7,28);