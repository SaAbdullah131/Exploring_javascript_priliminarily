// continue statement in js...

var numbers=[45,87,89,56,32,51,25,188,41,25,98];

for(var i=0;i<numbers.length;i++){
    var number=numbers[i];
    if(numbers[i]>50){
        continue;
    }
    console.log(numbers[i]);
}