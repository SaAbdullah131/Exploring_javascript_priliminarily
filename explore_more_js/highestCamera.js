// highest camera find 

const phones = [
    {name:"Samsung",camera:12,storage: "32gb",price: 36000,color:"silver"},
    {name:"Walton",camera:18,storage: "32gb",price: 22000,color:"black"},
    {name:"iphone",camera:13,storage: "32gb",price: 82000,color:"golden"},
    {name:"Xaomi",camera:19,storage: "32gb",price: 52000,color:"silver"},
    {name:"Oppo",camera:21,storage: "32gb",price: 20000,color:"silver"},
    {name:"Nokia",camera:28,storage: "32gb",price: 440000,color:"silver"},
    {name:"HTC",camera:10,storage: "32gb",price: 630000,color:"silver"},
];

function highestCamera(phones) {
    let highestCamera= phones[0];
    for(let i=0;i<phones.length;i++) {
        if(highestCamera.camera < phones[i].camera) {
            highestCamera=phones[i];
        }
    }
    return highestCamera;
}
const mySelection = highestCamera(phones);
console.log(mySelection);