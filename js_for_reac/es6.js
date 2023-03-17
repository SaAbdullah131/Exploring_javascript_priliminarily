//1. template String 
const numbers = [12,34,45,76,89];
const student = {
    name:'sakib khan',
    age:37,
    movies: ['king khan','Dhakar mastan']
}
const about = `My name is ${student.name} Age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

// 2.arrow function
const getNum = ()=>55;

const getNumber = (num) => {
    return num+65;
}
const isEven = firstNumber =>firstNumber %2 ===0;

const add= (first,second,third)=>first+second+third;
const doMath = (num1,num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator

const newNumber = [...numbers]; // [...]

numbers.push(99);
numbers.push(99);
numbers.push(99);


// create new array from an older array and add an element

const currentNumbers = [...numbers,66];
console.log(numbers);
console.log(newNumber);
console.log(currentNumbers);