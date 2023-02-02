// splice in js
const friends = [12,45,32,22,44,62,29,68,82];
// Remove Element from an array..
// and, if necessary ,insert new element in their place..
//returning the deleted elements.
// will change the original array
const partial = friends.splice(2,5,99,555,777);
console.log(partial);
console.log(friends);