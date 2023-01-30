function isLeapYear(year) {
    if(year%4===0 && (year%100!==0) || (year%400===0)){
        return true;
    }else{
        return false;
    }
}

const myYear =isLeapYear(1986);
console.log(myYear);
const herYear=isLeapYear(1993);
console.log(herYear);
