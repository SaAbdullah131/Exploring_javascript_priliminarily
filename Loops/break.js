// break statement in js
for(var i=1;i<=20;i++) {
    if(i>10){
        break;
    }
    console.log(i);
}
// break in while loop
var roastGiven=0;
while(roastGiven<10){
    console.log("Roast Den, gift item ansi");
    roastGiven++;
    if(roastGiven>4) {
        break;
    }
}
var items=["bottle","mouse","sunglass","pen","notebook"];
for (var i=0;i<items.length;i++){
    if(items[i]==="pen"){
        break;
    }
    console.log(items[i]);
}