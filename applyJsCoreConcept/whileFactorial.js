// factorial using while loop..

// reverse way 
function factorial (number) {
    let num=1;
    let result =1;
    while(num>=1){
        result=result*num;
        num++;
    }
return result;
}
let n=8;
let res=factorial(n);
console.log("Factorial of ",n,"is :",res);