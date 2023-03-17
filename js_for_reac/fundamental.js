//1. how to declare a variable using let and const 
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';
//2.
// b basic  condition >,<,===,!==,<=,>=
// multiple conditions: && ,|| 

if(fatherName === 'arnold' || season === 'rainy') {

}else if(fatherName === 'Arnold'){

} else {

}
// 3.Array declare
//index
//length,push

const numbers = [89,35,88,234];
numbers[0]=56;

// 4.for loop,while
for(let i = 0;i<numbers.length;i++) {
    const number = numbers[i];
    console.log(number);
}
// 5 function declare
function multiple (num1,num2) {
    const result = num1 * num2;
    return result;
}
const output = multiple(12,12);
console.log(output);

// 6.Object
// 3 ways to access property by name
const student = {
    name:'Salib Khan',
    age:32,
    movies:['king khan','Dhakar mastan']
}
const myVariable = 'age';
console.log(student.age);// directly by property 
console.log(student['age']); // direct access via property name string
console.log(student[myVariable]); // bracket notation // access via property name in a variable  