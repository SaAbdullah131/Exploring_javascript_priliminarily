const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {id:19,class:11,name:"Rion"};
const friends = [13,14,11,17,21,24];
function add(num1,num2) {
    return  num1+num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using isArray
console.log(Array.isArray(friends));
console.log(typeof add);
//------------------
console.log(friends.includes(19));
console.log(friends.includes(21));
if(friends.indexOf !==-1) {
    console.log("Yes Exist");
}

// concat : join two string 

const newFriendsAge= [12,13,11,17];
const allFriendsAge = newFriendsAge. concat(friends);
console.log(allFriendsAge);