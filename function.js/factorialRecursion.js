
function factorial(i) {
    if(i===0 || i===1) {
        return 1;
    }
    return i * factorial(i-1);
}

const result = factorial(5);
console.log(result);
/**
 * 1.5 * factorial(5-1);
 * 2. 5 * 4 * factorial(4-1);
 * 3. 5 * 4 * 3 * factorial (3-1);
 * 4. 5 * 4 * 3 *2*factorial(2-1);
 * 5. 5* 4 * 3 * 2 * 1;
 */
// let factorial = 1;
// let n =5;
// for(let i = n ; i>=1;i--) {
//     factorial = factorial * i;
// }
// console.log(factorial);