const result = Math.pow(3,8);
console.log(result);

const num1=25;
const num2=45;
const gap= Math.abs( num1 -num2);
console.log(gap);

if(gap<5){
    console.log("You guys can be friends");
}
else {
    console.log("you guys stay apart");
}

//------------------------------
const number =2.49998;
const number1=3.4353;
const number2=9.99343;
const fullNumber=Math.round(number);
console.log(fullNumber);
console.log(Math.ceil(number1));
console.log(Math.floor(number2));

// ------------------------
// random 

for(let i=0;i<20;i++){
    console.log(Math.round(Math.random()*6));
}