function sum(i) {
    if(i===1) {
        return 1;
    }
    return i + sum(i-1);// call function inside of it
}
const result = sum(5);
console.log(result);

/**
 * 5 + sum(4)
 * 5 + 4 + sum(4-1);
 * 5+4+3+sum(3-1);
 * 5 + 4 + 3 + 2 + sum(2-1);
 * 5 + 4  + 3 + 2 + 1;
 */