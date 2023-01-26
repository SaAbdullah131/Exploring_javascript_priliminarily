// Nested Conditions in js;

var math=true;
var geometry=true;
var straightLine=false;

if(math===true){
    console.log("You're good just basic algebra");
    if(geometry===true){
        if(straightLine===true)
        console.log("You're good in math");
    }else {
        console.log("You're good Math,but not Geometry")
    }
}else {
    console.log("You're not good in Math");
}