// total mark average using function in js

function average (assin1,assin2,assin3){
    const totalMark=assin1+assin2+assin3;
    const average =totalMark/3;
    return average;
}
const assign1=58;
const assign2=60;
const assign3=59;
let avg=average(assign1,assign2,assign3);
console.log("My average mark so far is:",avg);