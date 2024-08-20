console.log('\n---------------TASK-1-----------------\n');
function concatStrings(s1, s2) {
    return `${s1} ${s2}`;
   /* let result = s1+' '+ s2
    return result*/
   //return s1.concat(' ').concat(s2);
}
console.log(concatStrings('Hello', 'World'));

console.log('\n---------------TASK-2-----------------\n');


function getStringLength(string) {
   return string.length;
}
console.log(getStringLength('Bermet'));

console.log('\n---------------TASK-3-----------------\n');


function convertToUpperCase(str1) {
return str1.toUpperCase();
}
console.log(convertToUpperCase('hello World, Hi, Hello'))


console.log('\n---------------TASK-4-----------------\n');


function extractSubstring (string) {
    //return string.substring(4, 8)
    return string.slice(4, 8);
}

console.log(extractSubstring('Javascript'));

console.log('\n---------------TASK-5-----------------\n');

/*
Write a function that splits a string into an array of words based on spaces and returns the array.
*/

function getArray(string1) {
    return string1.split(' ');
}
console.log(getArray('My name is Bermet'));


console.log('\n---------------TASK-6-----------------\n');


/*
Write a function that checks if a given substring is present in a string and returns a boolean value.
*/
function checkString(sub, string2) {
   return string2.includes(sub);
}

console.log(checkString ('Ber', 'met'));


console.log('\n---------------TASK------------------\n');
/*
Write a function that finds the first occurrence of a substring in a string and returns its index.
*/

function occurance(str2, sub2) {
    return str2.indexOf(sub2);
}

console.log(occurance('I like Apple', 'Apple'));

/*
Write a function that replaces all occurrences of a substring with another substring in a string.

*/

function occuranceReplace(string, subStr1, subStr2){
    return string.replaceAll(subStr1, subStr2);
}

console.log(occuranceReplace('I like Apple', 'pp', 'oo'));

//Write a function that counts the number of occurrences of a substring in a string.

function strOccur(string3, subStr3) {
   return string3.split(subStr3).length - 1;
}

console.log(strOccur('I love love you', 'e')); // 2


