// case in js..
const userName="blackPink";
const userInput = "blackPinK";
console.log(userName.toLocaleLowerCase(),"\n");
console.log(userInput.toUpperCase());
if( userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()){
    console.log("Valid User");
}
else {
    console.log("Invalid User");
}