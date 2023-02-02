// remove duplication items from an array..
const names =["Abdul","babul","cabul","dabul","ebul","babul","Abul","kabul","gabul","cabul","babul","Abul","Abul"];

function removeDuplicate(names) {
    const unique = [];
    for(let i=0;i<names.length;i++) {
        const name = names[i];
        if(unique.includes(name)=== false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);