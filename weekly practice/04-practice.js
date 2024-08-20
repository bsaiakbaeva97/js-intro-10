const { getRandomNumber } = require('../utils/MathHelper.js');


console.log('\n---------------TASK-1-----------------\n');

/*
Requirement:
Assume you are given 2 numbers to be 0 or 1.
 
Print true if they are same number.
Otherwise, print false
 
Test data 1:
0, 1
 
Expected result 1:
false
 
 
Test data 2:
0, 0
 
Expected result 2:
true
 
 
Test data 3:
1, 0
 
Expected result 3:
false
 
 
Test data 4:
1, 1
 
Expected result 4:
true
*/

let t1num1 = getRandomNumber(0, 1);
let t1num2 = getRandomNumber(0, 1);
console.log(t1num1);
console.log(t1num2);

if (t1num1 === t1num2) console.log('true');
else console.log('false');

// ASCII
let t2character = '8'; // 

let t2CharacterASCII = t2character.charCodeAt(0);

if (t2CharacterASCII >= 48 && t2CharacterASCII <= 57) {
    console.log(`"${t2character}" is a digit`);
}
else if ((t2CharacterASCII >= 65 && t2CharacterASCII <= 90) || (t2CharacterASCII >= 97 && t2CharacterASCII <= 122)) {
    console.log(`"${t2character}" is a letter`);
}
else {
    console.log('INVALID INPUT');
}

console.log('\n---------------TASK-2-----------------\n');
/*
Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1:
"a"

Expected result 1:
"a"  is a lowercase letter


Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is an uppercase letter


Test data 4:
" "

Expected result 4:
"INVALID INPUT"

*/

let t3character = 'B';
let t3characterASCII = t3character.charCodeAt(0);

if (t3characterASCII >= 65 && t3characterASCII <= 90) {
    console.log(`'${t3character}' is an uppercase letter`);
}
else if (t3characterASCII >= 97 && t3characterASCII <= 122) {
    console.log(`'${t3character}' is a lowercase letter`);
}
else {
    console.log('INVALID INPUT');
}

// nested if...else


if ((t3ASCII >= 65 && t3ASCII <= 90) || (t3ASCII >= 97 && t3ASCII <= 122)) {
    if (t3ASCII <= 90) console.log(`"${t3character}" is an uppercase letter`);
    else console.log(`"${t3character}" is a lowercase letter`);
}
else {
    console.log("INVALID INPUT");
}

console.log('\n---------------TASK-3-----------------\n');

/*
Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.

Test data 1:
"a"

Expected result 1:
"a"  is not a special character


Test data 2:
"5"

Expected result 2:
"5" is not a special character
*/

let t4character = 'B';
let t4ASCII = t4character.charCodeAt(0)

if((t4ASCII >= 65 && t4ASCII <= 90) || (t4ASCII >= 97 && t4ASCII <= 122) || (t4ASCII >= 48 && t4ASCII <= 57) || (t4ASCII === 32)) {
    console.log(`"${t4character}" is not a special character`);
}
else {
    console.log(`"${t4character}" is a special character`);
}

console.log('\n---------------TASK-4-----------------\n');

/*
Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a" is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N" is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/

let t5character = 'U';
let t5ASCII = t5character.charCodeAt(0)
if((t5ASCII >= 65 && t5ASCII <= 90) || (t5ASCII >= 97 && t5ASCII <= 122)) {

}
else {
    console.log("INVALID INPUT")
}


let t6character = 'U';
let vowels = 'aeiouAEIOU'
console.log(vowels.includes(t6character));



function isDigit(char) {
    let charASCII = char.charCodeAt(0)   
    return charASCII>= 48 && charASCII <= 57 
}

