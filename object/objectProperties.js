// Object Properties in Js..

const shoppingCart ={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25
}
// when we're sure know the specific property name,use dot notation to get the property values
const penCount = shoppingCart.pen;
//alternative system...when you know the specific property name..
console.log(penCount,"\n");
const penCount1=shoppingCart["pen"];
console.log(penCount1,"\n");
// Getting all Properties of an Object

const properties = Object.keys(shoppingCart);
console.log("All Properties is:",properties,"\n");
// Getting the Values of an object.

const propertyValue=Object.values(shoppingCart);
console.log("All properties values of object is: ",propertyValue);
console.log(shoppingCart);

const propertyName="mouse";
const propertyValues=shoppingCart[propertyName];
console.log(propertyName,propertyValues);
// set Property  values 

shoppingCart.mouse=15;
shoppingCart["mouse"]=29;
console.log(shoppingCart);