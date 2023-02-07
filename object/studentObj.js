const nayok = {
    name:"Sakib Khan",
    id:121,
    address : "Movie cinema",
    isSingle: true,
    friends : ["Apu","Raaz","Salman","Aamir"],
    movies: [{name: "no 1",year:2012},{name:"King number 1",year:2016}],
    act: function (){
        console.log("Acting Like Sakib Khan");
    },
    car:{
        brand: "tesla",
        price : 5000000,
        made:2020,
        manufacturer: {
            name:"tesla",
            ceo: "Elon Mask",
            country:"use"
        }
    }

}
console.log(nayok.friends);
console.log(nayok.car);
console.log(nayok.act);
 nayok.act();
