console.log('\n---------------TASK-1-----------------\n');
/*
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges"                         -> "APPLE"
"JavaScript is not a scripting programming language"      -> "JavaScript"
"I don't like books"                                -> "I like books"
*/

let s1 = 'I like apples and oranges';
let s2 = 'Java is not a scripting programming language';
let s3 = "I don't like books"

console.log(s1.slice(7, 12). toUpperCase());
console.log(s2.slice(0, 4) + s2[14].toUpperCase() + s2.slice(15, 20));
console.log(s3.replace((s3.slice(0, 6)), ''));


console.log('\n---------------TASK-2-----------------\n');
/*
Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters     
    -if it has any vowel, then print true
    -Else, print false
    Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1:
let s1 = "JavaScript";

Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true
*/

let str = 'JavaScript'
console.log('The length is = ' + str.length);
console.log(str[0]);
console.log(str.at(-1));
console.log(str.includes('e'));


console.log('\n---------------TASK-2-----------------\n');
/*
Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1:
let s2 = "x";

Expected Result 1:
"x"


Test Data 2:
let s2 = "abc";

Expected Result 2:
"b"
*/

// Odd length
let str1 = 'Tatyana'

console.log(str1[(str1.length -1) / 2]);
console.log(str1[Math.floor([str1.length / 2])]);

// Even length
let str2 = ''
console.log(str2[(str2.length / 2) - 1] + str2[(str2.length / 2)]);


console.log('\n---------------TASK-3-----------------\n');
/*
Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters


Test Data 1:
let s4 = "abcd";

Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = 
*/

let str3 = 'Sanzhar'

console.log('The first 2 characters are = '+ str3.slice(0, 2));
console.log('The last 2 characters are = ' + str3.slice(-2));
console.log('The other characters are = ' + str3.slice(1, str3.length - 2));

//Write a program that swaps the first and last word of a given sentence as a String. 

let str4 = 'I love'
let firstWord = str4.slice(0, str4.indexOf(' '))
let lastWord = str4.slice(str4.lastIndexOf(' '), (str4.length - 1) + 1);
let midWord = str4. slice(str4.indexOf(' '), str4.lastIndexOf(' '));

console.log(lastWord + midWord + ' ' + firstWord);

// the number of words in a given sentence as a String.
let str5 = 'There is a Python class today'
console.log(str5.split(' ').length)

/* Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print false.

Test Data 1:
let s5 = "ab";
*/

let str6 = 'Java'
let firstW = str6.slice(0, 2);
let lastW = str6.slice(-2);

console.log(firstW === lastW);
