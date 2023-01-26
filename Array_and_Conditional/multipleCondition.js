// Multiple condition in js 

var isGraduate=true;
var salary=25000;
var cars=0;

if(isGraduate===true && salary>50000 ){
    console.log("Let's go for Marriage")
}else {
    console.log("Marriage hasn't in your luck");
}
salary=50001;
cars=1;

if(isGraduate===true && salary>50000 && cars>=1) {
    console.log("Let's go for Marriage");
}else {
    console.log("Marriage hasn't in your luck");
}

var isGraduate=false;
var salary=75000;
var cars=1;

if(isGraduate===true ||salary>50000 ) {
    console.log("Let's go for love");
}else{
    console.log("Don't go for Love");
}