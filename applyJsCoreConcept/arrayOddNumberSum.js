// Array Odd number sum;
function arrayOddNum(array) {
    let sum=0;
    for(var i=0;i<array.length;i++){
        if(array[i]%2===1){
            sum=sum+array[i];
        }
    }
    return sum;
}
function OddNumber(arr){
    const oddNum=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            oddNum.push(arr[i]);
        }
    } 
}
var arr=[10,11,5,6,7,9,15,13];
var SumOfOdd=arrayOddNum(arr);
console.log("sum of array odd number:",SumOfOdd);