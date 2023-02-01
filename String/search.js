const lyrics = 'tumi bondu kala pakhi ami jeno ki,bosonto kale tomai bolte pari ni.sada sada kala kala ronge jomeche sada kala';
const searchString = "Pakhi";
// const doesExist = lyrics.includes("pakhi");
// const doesExist = lyrics("Pakhi");

// const doesExist=lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLocaleLowerCase();

// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower=searchString.toLocaleLowerCase();
const doesExist=lyricsLowerCase.includes(searchStringLower);
const doesExistOneLine=lyrics.toLocaleLowerCase().includes(searchString.toLocaleLowerCase);
console.log(doesExist);
console.log(doesExistOneLine,"\n");

// -----------------------------------------
// indexOf 
console.log(lyrics.indexOf("kala"));//11 where first letter
console.log(lyrics.indexOf("tumi"));
console.log(lyrics.indexOf("bondu"));

if(lyrics.indexOf('sada')!==-1){
    console.log("Exist inside the string");
}
else {
    console.log("cannot find it");
}

// startsWith
console.log(lyrics.startsWith('tumi'));

// endswith
const fileName="mybiodata.pdf";
const otherFile="mypic.jpg";
console.log(fileName.endsWith(".pdf"));