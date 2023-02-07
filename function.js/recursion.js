function sum(i) {
    if(i===1) {
        return 1;
    }
    return i + sum(i-1);// call function inside of it
}
const result = sum(5);
console.log(result);