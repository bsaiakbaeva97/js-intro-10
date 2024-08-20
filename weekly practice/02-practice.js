/*
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges"                         -> "APPLE"
"Java is not a scripting programming language"      -> "JavaScript"
"I don't like books"                                -> "I like books"
*/

let sentence1 = "I like apples and oranges apple" ;
let sentence2 = "Java is not a scripting programming language";
let sentence3 = "I don't like books";

// console.log(sentence1.split(' ').at(2).slice(0,5).toUpperCase());
console.log(sentence1.slice(7, 12).toUpperCase());
console.log(sentence2.slice(0, 4) + sentence2[14].toUpperCase() + sentence2.slice(15, 20));
console.log(sentence3.replace(" don't", ''));

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


Test Data 2:
let s1 = "";

Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/


let s1 = 'JavaScript';
console.log(s1.length); // 9
console.log(s1[0]); // J
console.log(s1.at(-1)) // t
// console.log(s1[s1.length-1]); // t
// console.log(s1.slice (-1)); // t

console.log(s1.charAt(-1)); // '' string
console.log(s1[-1]); // undefined

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


Test Data 3:
let s2 = "civic";

Expected Result 3:
"v"

*/
let s2 = "abc";
console.log(s2[(s2.length - 1) / 2]);
console.log(s2[Math.floor(s2.length / 2)]);
console.log(s2[Math.trunc(s2.length / 2)]);
console.log(s2[parseInt(s2.length / 2)]);

/*
Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1:
let s3 = "";

Expected Result 1:
""


Test Data 2:
let s3 = "abcd";

Expected Result 2:
"bc"
let s3 = 'JavaScript'
*/
let s3 = 'JavaScript'
console.log(s2[s3.length / 2 -1]+ s3[s3.length / 2]);

/*
TASK 05
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


Test Data 2:
let s4 = "JavaScript";

Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s4 = 'Javascript';
console.log(s4.slice(0, 2)); // first two
console.log(s4.slice(-2)); // last two
console.log(s4.slice(2, s4.length - 2)); //middle two characters


let s5 = 'Javascript';
console.log(s4.slice(0, 2)); // first two
console.log(s4.slice(-2)); // last two


/*
Write a program that swaps the first and last word of a given sentence as a String. 
*/

let s8 = 'I like Apple'
let firstWord = s8.slice(0, s8.indexOf(' '));
let lastWord = s8.slice(s8.lastIndexOf(' ') + 1);
let mid = s8.slice(s8.indexOf(' ') + 1, s8.lastIndexOf(' '));


console.log(lastWord + ' ' + mid + ' ' + firstWord); // Apple like I
console.log(`${lastWord} ${mid} ${firstWord}`); // Apple like I

/*
TASK 10
Requirement:
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.

Test Data 1:
let s9 = "Good morning";

Expected Result 1:
2


Test Data 2:
let s9 = "Hello";

Expected Result 2:
1


Test Data 3:
let s9 = "I like Apple";

Expected Result 3:
3
*/

let s9 = 'I like Apple'
console.log(s9.split(' ').length);


/*
Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print false.

Test Data 1:
let s5 = "ab";;

Expected Result 1:
true

Test Data 2:
let s5 = "abcd";

Expected Result 2:
false

Test Data 3:
let s5 = "12ab12";;

Expected Result 1:
true

Test Data 4:
let s5 = "JavaScript";

Expected Result 4:
false
*/

let s10 = 'JavaScript';
let firstWord1 = (s10.slice(0, 2)); 
let lastWord1 = (s10.slice(-2)); 

console.log(firstWord1 === lastWord1);

/* HOMEWORK
Requirement:
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 
Test Data 2:

Test Data 1:
let s61 = "orange";
let s62 = "6";
Expected Result 1:
rang

Test Data 3:
let s61 = "123456";
let s62 = "Blue";
Expected Result 3:
2345lu
*/
let s61 = '123456';
let s62 = 'blue'

console.log(`Expected result: ${s61.slice(1, -1) + s62.slice(1, -1)}`);


/*
Requirement:
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false
*/

let s7 = 'xxbluexx';
console.log(s7.startsWith('xx') && s7.endsWith('xx'));


function longer(str3, str4) {
    if(str3.length >= str4.length){
        return str3
    }else {
            str3};
}

console.log(longer('Bermey','Hello'));




