/*
Assume that you are given a string of any length

Get the last 5 characters from it
Morning - rning
Saturday - urday
Hello - Hello
*/

let str1 = ''
console.log(str1.substring(str1.length - 5));
console.log(str1.slice(str1.length - 5));
console.log(str1.slice(-5));

// if(str1.length < 5) throw Error('This string does not have 5 characters!!!');
// else console.log(str1.slice(-5));

let str2 = ''

console.log(str2.substring(0, 3) + str2.substring(str2.length - 3));
console.log(str2.slice(0, 3) + str2.slice(str2.length - 3));
console.log(str2.slice(0, 3) + str2.slice(- 3));

function firLas3Char(str) {
    if(str.length<3) throw Error ('This string does not have 5 characters!!!');
    else return str.slice(0, 3) + str.slice(-3);
}
console.log(firLas3Char ('Hello'));
console.log(firLas3Char ('JavaScript'));
