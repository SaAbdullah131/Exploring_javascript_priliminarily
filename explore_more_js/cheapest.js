// find the cheapest phone from an array of phone object...

const phones = [
    {name:"Samsung",camera:12,storage: "32gb",price: 36000,color:"silver"},
    {name:"Walton",camera:10,storage: "32gb",price: 22000,color:"black"},
    {name:"iphone",camera:12,storage: "32gb",price: 82000,color:"golden"},
    {name:"Xaomi",camera:12,storage: "32gb",price: 52000,color:"silver"},
    {name:"Oppo",camera:12,storage: "32gb",price: 20000,color:"silver"},
    {name:"Nokia",camera:12,storage: "32gb",price: 440000,color:"silver"},
    {name:"HTC",camera:12,storage: "32gb",price: 630000,color:"silver"},
];
function cheapestPhone(phones) {
    let cheapest =phones[0];
    for(let i=0;i<phones.length;i++) {
        if(cheapest.price>phones[i].price) {
            cheapest = phones[i];
        } 
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);