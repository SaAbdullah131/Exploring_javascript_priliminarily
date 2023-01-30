// Looping in Object ..
// array vs object ..

//one similar information in hold into an array..
const shoppingItems=["books","sunglass","shoes","pend"];
const friendsAge=[21,22,20,35,34,27,18];
const friendsAges={
    Rion:25,
    Shakibe:26,
    Mukter:23,
    Saidur:22,
    Khaliq:30
}
const keyGulo =Object.keys(friendsAges);
const ValueGulo=Object.values(friendsAges);
for(var i=0;i<keyGulo.length;i++){
    var proName=keyGulo[i];
    var proVal=ValueGulo[i];
    console.log(proName,proVal);
}
const shoppingCart ={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
    shoes:2,
}
// keys
const keys=Object.keys(shoppingCart);
console.log(keys,"\n");
// values 
const values=Object.values(shoppingCart);
console.log(values);

for(var i=0;i<keys.length;i++){
    var propertyName=keys[i];
    var propertyValue=values[i];
    console.log(propertyName,propertyValue);
}

// using for in loop
for(var propertyName  in shoppingCart){
    const value=shoppingCart[propertyName]
    console.log(propertyName,value);
}