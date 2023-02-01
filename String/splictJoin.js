const lyrics = 'tumi bondu kala pakhi ami jeno ki,bosonto kale tomai bolte pari ni,sada sada kala kala ronge jomeche sada kala';
const parts =lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
console.log(chars);
// console.log(parts);
 console.log(sentences);
// console.log(lyrics);

const partial = lyrics.slice(5,8);//ends -1;
const partial2=lyrics.substring(5,8);
console.log(partial);
console.log(partial2);
const lines =[
    'tumi bondu kala pakhi ami jeno ki',
    'bosonto kale tomai bolte pari ni',
    'sada sada kala kala ronge jomeche sada kala'
];
const newSong = lines.join(':');
console.log(newSong);

