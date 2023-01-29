// set values into an object in js

const todayClass ={
    networkSecurity:"Jannatul Mam",
    dataMining: "Chairman sir",
    networkTime:12,
    dataTime : 2
}
console.log(todayClass,"\n");
const Timing="dataTime";
const Val=todayClass[Timing];
console.log(Val,"\n");

todayClass[Timing]=9;
console.log(todayClass);
