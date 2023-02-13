// repeat using loop
// there are mainly three types of loop.
//1.for(When we know the range)
//1.1 Range
//1.2->For in
//1.3-> For of loop
//2.while(when we don't know the range ,but know the condition)
//3.Do while (one iteration should be do wheather the condition false)
for(let i=1;i<=100;i++){
    // it's a new js file ..you can write any valid js code here.
    // Every code written inside this block will execute multiple times 
    console.log("SA Abdullah");
}

while(true){
    let num = Math.ceil(Math.random()*100);
    if(num===99){
    break;
}
    console.log(num,"SA Abdullah");
}

do{
    console.log("It will run at least once ");
}while(false) ;

