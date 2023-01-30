// miles to kilometer convert using function 

function milesToKm(miles){
    const kilometer = miles *1.60934;
    return kilometer;
}
const distance =200;
const kilo=milesToKm(distance);
console.log(kilo);