// destructuring in js
// array destructuring
const numbers = [42,65];

// const x = numbers[0];
// const y = numbers[1];

 const[x,y] = numbers;
function boxify (num1,num2) {
    const nums = [num1,num2];
    return nums;
}

// const[first,second] = [90,34];
const [first,second] = boxify(90,34);

// console.log(boxify(90,34));

const student = {
    name:'sakib khan',
    age:40,
    movies: ['king khan','Dhakar Mastan']

}
const [firstMovie,secondMovie]= student.movies;
// console.log(firstMovie,secondMovie);

// Object destructuring 

const {name,age} ={name:'alu',age:14};
const {id,salary} ={id:12,name:'alu',salary: 34000,age:14};

const employee = {
    ide:'VS Code',
    designation: 'Developer',
    machine:'Mac',
    language: ['html','css','js','python'],
    specification: {
        height:66,
        weight:65,
        address:'kumarkhali',
        drink:'water',
        watch: {
            color:'black',
            price:500,
            brand:'garmin'
        }
    }
}
const {machine,ide} = employee;
const {weight,address} = employee?.specification;
const {brand} = employee ?.specification.watch;
console.log(brand);
