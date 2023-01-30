// inch to feet using function.. 
const inch=12;
// const feet=inch/12;
// console.log(feet);

// const dadaInches =144;
// const dadaFeet=dadaInches/12;
// console.log(dadaFeet);

// const dadiInches =60;
// const dadiFeet=dadiInches/12;
// console.log(dadiFeet);

function inchToFeet(inch){
    const feet=inch/12;
    return feet;
}
const dadaInches=84;
const dadaFeet=inchToFeet(dadaInches);
console.log(dadaFeet);