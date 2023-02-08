let nameMia = "SA Abdullah";

console.log("Hello World",nameMia,nameMia.length);

const names = ["Sa Abdullah","Rion al Noman","Shakibe"];
let index = -1;
let name = names[++index]

setInterval(() => {
    name = names[index ++];
    console.log(name,name.length);
    if(index === names.length) {
        index = 0;
    }
},1000);

// dynamically use variable 
// aldfjf143243 .. when found error in the file that is called interpreted time error or compile time error ...

// throw new Error("Something Went Wrong"); this is runtime error showing

// run time : 
// compile time ,even through javascipt not a compile language