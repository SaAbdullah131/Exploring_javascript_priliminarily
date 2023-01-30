// factorial in js

// factorial using recursive function
function factorial(n) {
 if(n === 0 || n === 1){
    return 1;
}
return n * factorial(n-1);
}
let fact=factorial(5);
console.log(fact);

// factorial 
function factori(number) {
    let result=1;
    for(let i=1;i<=number;i++) {
        result = result*i;
    }
    return result;
}
const num=factori(7);
console.log(num);

// reverse way factorial 
function facto(num){
    let result1=1;
    for(let i=num;i>=1;i--){
        result1=result1*i;
    }
    return result1;
}
const numbers=facto(8);
console.log(numbers);