console.log ('\n---------------TASK01--------------/n');
/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument
and returns the given word back tripled if the string length is even or doubled if the string length
is odd when invoked.
Examples:
doubleOrTripleWord("Tech") -> "TechTechTech"
doubleOrTripleWord("Apple") -> "AppleApple”
doubleOrTripleWord("") -> ""
doubleOrTripleWord(" ") -> " "
doubleOrTripleWord("1") -> "11"
doubleOrTripleWord("22") -> "222222"
*/

const doubleOrTripleWord = (str) =>  str.length % 2 === 0 ? str.repeat(3) : str.repeat(2);

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord('1'))
console.log(doubleOrTripleWord('22'))
console.log(doubleOrTripleWord(''))
console.log(doubleOrTripleWord(' '))

console.log ('\n---------------TASK02--------------/n');
/*
First and Last Word
Write a function named as firstlastWord() which takes a string word as an argument and
returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
Examples:
firstLastWord("Hello World") -> "HelloWorld"
firstLastWord("I like JavaScript") -> "IJavaScript”
firstLastWord("Hello") -> "HelloHello"
firstLastWord("") -> ""
firstLastWord("
*/

const firstlastWord = (str) => {
    const arrStr = str.split(' ');
   return arrStr[0] + arrStr.at(-1);
}
console.log(firstlastWord("I like JavaScript"));

console.log ('\n---------------TASK03--------------/n');
/*
Has Vowel
Write a function named hasVowel() which takes a string argument and returns true if the
string has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("") -> false
hasVowel("Javascript") -> true
hasVowel("Tech Global") -> true
hasVowel("1234") -> false
hasVowel("ABC") -> true
*/

const hasVowel = (str) => [...str].some((char) => 'aeouiAEOUI'.includes(char));

console.log(hasVowel(''))
console.log(hasVowel("JavAscript"));
console.log(hasVowel('1234'))
console.log(hasVowel('bpt'))

console.log ('\n---------------TASK04--------------/n');
/*
Start Vowel
Write a function named as startVowel() which takes a string word as an argument and returns
true if given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
Examples:
startVowel("Hello") -> false
startVowel("Apple") -> true
startVowel("orange") -> true
startVowel("") -> false
startVowel(" ") -> false
startVowel("123") -> false
*/

const startVowel = (str) => 'aeouiAEOUI'.includes(str[0]);

console.log(startVowel("Hello"))
console.log(startVowel("apple"))
console.log(startVowel("Orange"))
console.log(startVowel('123'))

console.log ('\n---------------TASK05--------------/n');
/*
Average of Edges
Write a function named averageOfEdges() which takes three number arguments and will
return average of min and max numbers.
Examples:
averageOfEdges(0, 0, 0) -> 0
averageOfEdges(0, 0, 6) -> 3
averageOfEdges(-2, -2, 10) -> 4
averageOfEdges(-3, 15, -3) -> 6
averageOfEdges(10, 13, 20) -> 15
*/

const averageOfEdges = (num1, num2, num3) => (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2;


console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, -15, -3));
console.log(averageOfEdges(10, 13, 20));

console.log ('\n---------------TASK06--------------/n');

/*
Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and returns a new
string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") -> ""
replaceFirstLast("Hello") -> "oellH"
replaceFirstLast("Tech Global") -> "lech GlobaT"
replaceFirstLast("A") -> ""
replaceFirstLast(" A ") -> ""
*/

function replaceFirstLast(str) {
    const strTrim = str.trim().split(/\s+/).join(' ')
    if(strTrim.length >= 2) return strTrim.at(-1) + strTrim.slice(1, -1) + strTrim.at(0) 
    return '';
}

console.log(replaceFirstLast("Hello"))
console.log(replaceFirstLast("Tech    Global "))
console.log(replaceFirstLast(" A "))

console.log ('\n---------------TASK07--------------/n');

/*
Swap First and Last Four Characters
Write a function named as swap4() which takes a string word as an argument and returns the
string back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.
Examples:
swap4("abc") -> ""
swap4("JavaScript") -> "riptScJava"
swap4("TechGlobal") -> "obalGlTech"
swap4("") -> ""
swap4(" ") -> ""
swap4("Apple") -> ""
*/

function swap4(str){
    let strTrim = str.trim();
   if(strTrim.length < 8) return '';
   return strTrim.slice(-4)+ strTrim.slice(4, -4) + strTrim.slice(0, 4)
}
console.log(swap4("TechGlobal"));
console.log(swap4("JavaScript"));
console.log(swap4("abc"));

console.log ('\n---------------TASK08--------------/n');

/*
Swap First and Last Words
Write a function named as swapFirstLastWord() which takes a string word as an argument
and returns the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
Examples:
swapFirstLastWord("Hello World") -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") -> "bar bar foo foo"
swapFirstLastWord("") -> ""
swapFirstLastWord(" ") -> ""
swapFirstLastWord("Hello") -> ""
swapFirstLastWord("Hello ") -> ""
*/
function swapFirstLastWord(str){
    let strNoSpace = str.split(' ').filter((char) => char !== '');
    if(strNoSpace.length < 2) return '';
    else if(strNoSpace.length === 2) return strNoSpace.at(-1) + ' ' + strNoSpace.at(0)
    return strNoSpace.at(-1) + ' ' + strNoSpace.slice(1, -1).join(' ') + ' ' + strNoSpace.at(0);
}


console.log(swapFirstLastWord("Hello World"))
console.log(swapFirstLastWord("I   like JavaScript      so much"))




console.log ('\n---------------TASK9--------------/n');
/*
Count Negative Numbers
Write a function named countNeg() which takes an array of numbers as an argument and
returns how many elements are negative when invoked.
Examples:
countNeg([-45, 0, 0, 34, 5, 67]) -> 1
countNeg([-23, -4, 0, 2, 5, 90, 123]) -> 2
countNeg([0, -1, -2, -3]) -> 3
*/

const countNeg = (arr) => {
    let count = 0;
    for(const num of arr) {
        if(num < 0) count++
    }
    return count;
}
console.log(countNeg([-45, 0, 0, 34, 5, 67]))
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]))
// Reduce
const countNeg1 = (arr) => arr.reduce((acc, curr) => curr < 0 ? acc + 1: acc, 0)

console.log(countNeg1([-45, 0, 0, 34, 5, 67]))
console.log(countNeg1([-23, -4, 0, 2, 5, 90, 123]))


console.log ('\n---------------TASK10--------------/n');
/*
Count A
Write a function named countA() which takes a string argument and returns how many A or a
there are in the given string when invoked.
NOTE: Ignore case sensitivity.
Examples:
countA("TechGlobal is a QA bootcamp") -> 4
countA("QA stands for Quality Assurance") -> 5
countA("Cypress") -> 0
*/

const countA = (str) => [...str].reduce((acc, curr) => curr.toLowerCase() === 'a' ? acc + 1 : acc, 0)
console.log(countA("QA stands for Quality Assurance"))

//Filter
const countA1 = (str) => [...str].filter((char) => char.toLowerCase() === 'a').length
console.log(countA1("TechGlobal is a QA bootcamp"))



console.log ('\n---------------TASK11--------------/n');

/*
Count Words
Write a function named countWords() which takes a string argument and returns the total
count of words in the given string when invoked.
NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords(" Javascript is fun ") -> 3
countWords("Cypress is an UI automation tool. ") -> 6
countWords("1 2 3 4") -> 4
*/

const countWords = (str) => {
    const strTrimmed = str.split(' ');
    return strTrimmed.reduce((acc, curr) => curr ? acc + 1: acc, 0)
}

console.log(countWords("   1 2 3 4 "))

console.log ('\n---------------TASK12--------------/n');
/*
Factorial
Write a function named as factorial() which takes a number as an argument and returns the
factorial of the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5) -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/

const factorial = (num) => {
    let count = 1
    for(let i = 2; i <= num; i++){
        count *= i
    }
    return count;

}
console.log(factorial(5))

// Recursion
const factorial1 = (num) => num === 0 || num === 1 ? 1 : num * factorial1(num-1);
console.log(factorial1(5))


console.log ('\n---------------TASK13--------------/n');
/*
Count 3 or Less
Write a function named as count3OrLess() which takes a string word as an argument and
returns the count of the words that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello") -> 0
count3OrLess("Hi John") -> 1
count3OrLess("JavaScript is fun") -> 2
count3OrLess("My name is John Doe") -> 3
count3OrLess("") -> 0
*/

const count3OrLess = (str) => str.split(' ').filter((word) => word.length <= 3 && word.length > 0).length;

console.log(count3OrLess('  Hello'));
console.log(count3OrLess('    '));
console.log(count3OrLess("  JavaScript    is fun    "))


// Reduce
const count3OrLess1 = (str) => str.split(' ').reduce((acc, word) => word.length <= 3 && word.length > 0 ? acc + 1 : acc, 0)

console.log(count3OrLess1('Hello'));
console.log(count3OrLess1('    '));
console.log(count3OrLess1("  JavaScript    is fun    "))

console.log ('\n---------------TASK14--------------/n');
/*
Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument
and returns the string back with all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello") -> "Hello"
removeExtraSpaces(" Hello World ") -> "Hello World"
removeExtraSpaces(" JavaScript is fun") -> "JavaScript is fun”
removeExtraSpaces("") -> ""
*/

//Filter
const removeExtraSpaces = (str) => str.split(' ').filter((char) => char !== '').join(' ')
console.log(removeExtraSpaces("  Hello    World      "))

//Regexes

const removeExtraSpaces1 = (str) => str.trim().split(/\s+/).join(' ');
console.log(removeExtraSpaces1('   Hello   World'))

console.log ('\n---------------TASK15--------------/n');

/*
Middle Number
Write a function named middleInt() which takes three number arguments and return the middle
number.
Examples:
middleInt(1, 2, 2) -> 2
middleInt(5, 5, 8) -> 5
middleInt(5, 3, 5) -> 5
middleInt(1, 1, 1) -> 1
middleInt(-1, 25, 10) -> 10
*/
function middleInt(num1, num2, num3){
    if(num1 >= num2 && num1 <= num3) return num1;
    else if(num2 >= num1 && num2 <= num3) return num2;
    else return num3
}

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 3, 5));
console.log(middleInt(-1, 25, 10));

// Sort
const middleInt1 = (num1, num2, num3) => [num1, num2, num3].sort((a, b) => a - b)[1];

console.log(middleInt1(1, 2, 2))
console.log(middleInt1(5, 3, 5))
console.log(middleInt1(-1, 25, 10))

console.log ('\n---------------TASK16--------------/n');
/*
First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates
in the array. For two elements to be considered as duplicated, value and data types of the
elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) -> -1
*/

function firstDuplicate(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; i < arr.length; j++){
            if(arr[i] === arr[j]) return arr[i];
        }
    }
    return -1;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));

console.log ('\n---------------TASK17--------------/n');
/*
Find All Duplicate Elements
Write a function named as getDuplicates() which takes an array argument and returns all the
duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no
duplicates in the array. For two elements to be considered as duplicated, value and data types
of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ ]
*/
function getDuplicates(arr){
    let duplicate =[]
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++)
        if(arr[i] === arr[j] && !duplicate.includes(arr[i])) duplicate.push(arr[i]);
    }

    return duplicate;
}

function getDuplicates1(arr){
    let container = [];
    let duplicates = [];

    for(const ele of arr){
        if(container.includes(ele) && !duplicates.includes(ele)) duplicates.push(ele);
        else container.push(ele);
    }
    return duplicates;
}
console.log(getDuplicates1([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
console.log(getDuplicates1(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))

console.log ('\n---------------TASK18--------------/n');
/*
Count Vowels
Write a function named as countVowels() which takes a string word as an argument and
returns the count of the vowel letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") -> 2
countVowels("JavaScript is fun") -> 5
countVowels("") -> 0
*/

const countVowels = (str) => [...str].filter((char) => 'aeouiAEOUI'.includes(char)).length

console.log(countVowels("Hello"))
console.log(countVowels("JavaScript is fun"))
console.log(countVowels(""))


console.log ('\n---------------TASK19--------------/n');
/*
Reverse String Words
Write a function named as reverseStringWords() which takes a string as an argument and
returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces
before and after words in the given string.
Examples:
reverseStringWords("Hello World") -> "olleH dlroW"
reverseStringWords("I like JavaScript") -> "I ekil tpircSavaJ"
reverseStringWords("Hello") -> "olleH"
reverseStringWords("") -> ""
reverseStringWords(" ") -> ""
*/

const reverseStringWords = (str) => str.split(' ').map((ele) => ele.split('').reverse().join('')).join(' ');

console.log(reverseStringWords("Hello World"))

console.log ('\n---------------TASK20--------------/n');
/*
Count Consonants
Write a function named as countConsonants() which takes a string word as an argument and
returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") -> 3
countConsonants("Hello World") -> 8
countConsonants("JavaScript is fun") -> 12
countConsonants("") -> 0
*/

const countConsonants = (str) => [...str].filter((char) => !'aeouiAEOUI'.includes(char)).length

console.log(countConsonants("Hello"))

console.log ('\n---------------TASK21--------------/n');
/*
Count Multiple Words
Write a function named as countMultipleWords() which takes an array as an argument and
returns the count of the elements that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", " ", "foo bar", " foo" ]) -> 1
countMultipleWords([ "foo", "bar", "foobar", " foobar " ]) -> 0
countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ]) -> 4
countMultipleWords([ ]) -> 0
*/

function countMultipleWords(arr){
    let count = 0;
    for(const ele of arr) {
       let eleTrim = ele.trim()
        if(eleTrim.split(' ').length >= 2) count++
    }

    return count;
}

const countMultipleWords1 = (arr) => arr.filter((ele) => ele.trim().split(' ').length >= 2).length;

console.log(countMultipleWords1([ "foo", "", " ", "foo bar", " foo" ]))
console.log(countMultipleWords([ "foo", "bar", "foobar", " foobar " ]))


console.log ('\n---------------TASK22--------------/n');

/*
FizzBuzz
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string
composed with below requirements when invoked.
• You need to find all the numbers within the range of given 2 numbers (both inclusive)
and store them in a string from smallest to greatest number with a ' | ' separator for each
number.
• You will need to convert numbers divisible by 3 to 'Fizz'
• You will need to convert numbers divisible by 5 to 'Buzz'
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
• The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:
fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5) -> "Buzz"
fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"
*/

const fizzBuzz = (num1, num2) => {
   let numsSorted = [num1, num2].sort((a, b) => a - b);
   let result = []
   for(let i = numsSorted[0]; i <= numsSorted[1]; i++) {
        if(i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
        if(i % 3 === 0) result.push('Fizz');
        else if (i % 5 === 0) result.push('Buzz');
        else result.push(i);
    }
    return result.join(' | ');
}
console.log(fizzBuzz(13, 18))
console.log(fizzBuzz(12, 5))
console.log(fizzBuzz(5, 5))


console.log ('\n---------------TASK23--------------/n');
/*
Palindrome
Write a function named as isPalindrome() which takes a string word as an argument and
returns true if the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello") -> false
isPalindrome("Kayak") -> true
isPalindrome("civic") -> true
isPalindrome("abba") -> true
isPalindrome("ab a") -> false
isPalindrome("123454321") -> true
isPalindrome("A") -> true
isPalindrome("") -> true
*/

const isPalindrome = (str) => {
   let strTrimmed = str.trim().toLowerCase();
   return strTrimmed === strTrimmed.split('').reverse().join('')
}

console.log(isPalindrome("Hello"))
console.log(isPalindrome("  Abb a"))
console.log(isPalindrome("civic"))
console.log(isPalindrome(""))

console.log ('\n---------------TASK24--------------/n');
/*

Prime Number
Write a function named as isPrime() which takes a number as an argument and returns true if
the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even
prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
Examples:
isPrime(5) -> true
isPrime(2) -> true
isPrime(29) -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/

const isPrime = (num) => {
    if(num < 2) return false;
    else if(num === 2) return true;
    else if(num % 2 === 0) return false;
    
    for(let i = 3; i < num; i += 2){
       if(num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(21))


console.log ('\n---------------TASK25--------------/n');
/*
Add Two Arrays
Write a function named add() which takes two array of numbers as argument and returns a new
array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]) -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
add([-5, 6, -3, 11], [5, -6, 3, -11]) -> [0, 0, 0, 0]
*/

const add1 = (arr1, arr2) => {
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];
    
    for (let i = 0; i < maxLength; i++) {
        const num1 = arr1[i] ?? 0;
        const num2 = arr2[i] ?? 0;
        result.push(num1 + num2);
    }

    return result;
}

// map

const add = (arr1, arr2) => {
    if(arr1.length < arr2.length) [arr1, arr2] = [arr2, arr1];

    return arr1.map((value, i) => value + (arr2[i] ?? 0));
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); 
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))



console.log ('\n---------------TASK26--------------/n');
/*
No Elements With A
Write a function named noA() which takes an array of strings as argument and will return a
new array with all elements starting with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"]) -> ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) -> ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) -> ["###", "###", "###", "###", "###"]
*/

const noA = (arr) => arr.map((ele) => ele.trim().toLowerCase()[0] === 'a' ? '###' : ele);

console.log(noA(["javascript", "hello", "123", "xyz"]))
console.log(noA([" apple", "123", "ABC", "javascript"]))

console.log ('\n---------------TASK27--------------/n');
/*
No Elements Divisible By 3 and 5
Write a function named no3and5() which takes an array of integer numbers as argument and
will return a new array with elements replaced by conditions below.
If element can be divided by 5, replace it with 99
If element can be divided by 3, replace it with 100
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17]) -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6]) -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) -> [99, 11, 100, 13, 14, 101]
*/

const no3and5 = (arr) => arr.map((num) => {
    if(num % 3 === 0 && num % 5 === 0) return 101;
    else if(num % 3 === 0) return 100;
    else if(num % 5 === 0) return 99;
    else return num;
})

console.log(no3and5([7, 4, 11, 23, 17]))
console.log(no3and5([3, 4, 5, 6]))


console.log ('\n---------------TASK28--------------/n');
/*
No Elements Equals 13
Write a function named no13() which takes an array of numbers as argument and return a new
array with all 13s replaced with 0s.
Examples:
no13([1, 2, 3 ,4]) -> [1, 2, 3 ,4]
no13([13, 2, 3]) -> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) -> [0, 0, 0, 0, 0]
no13([]) -> []
*/

const no13 = (nums) => nums.map((num) => num === 13 ? 0 : num);

console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 13, 13 , 13, 13]))


console.log ('\n---------------TASK29--------------/n');
/*
Remove Duplicates
Write a function named removeDuplicates() which takes an array argument and returns a new
array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) -> ["1", "2", "3"]
*/

const removeDuplicates = (arr) =>{
    let result = [];
    arr.forEach((ele) => {
        if(!result.includes(ele)) result.push(ele);
    })
    return result;
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))


console.log ('\n---------------TASK30--------------/n');
/*
No Digits
Write a function named noDigit() which takes a string argument and returns a new string with
all digits removed from the original string.
Examples:
noDigit("") -> ""
noDigit("Javascript") -> "Javascript"
noDigit("123Hello") -> "Hello"
noDigit("123Hello World149") -> "Hello World”
noDigit("123Tech456Global149") -> "TechGlobal"
*/

const noDigit = (str) => str.split('').filter((ele) => !(ele >= '0' && ele <= '9')).join('');

console.log(noDigit("123Hello"))

console.log ('\n---------------TASK31--------------/n');
/*
No Vowel
Write a function named noVowel() which takes a string argument and returns a new string
with all vowels removed from the original string.
Examples:
noVowel("TechGlobal") -> "TchGlbl"
noVowel("AEOxyz") -> "xyz"
noVowel("Javascript") -> "Jvscrpt"
noVowel("") -> ""
noVowel("125$") -> "125$"
*/

const noVowel = (str) => str.split('').filter((char) => !'aeouiAEOUI'.includes(char)).join('');

console.log(noVowel("TechGlobal"))

console.log ('\n---------------TASK32--------------/n');
/*
Sum Of Digits
Write a function named sumOfDigits() which takes a string argument and returns sum of all
digits from the original string.
Examples:
sumOfDigits("Javascript") -> 0
sumOfDigits("John’s age is 29") -> 11
sumOfDigits("$125.0") -> 8
sumOfDigits("") -> 0
*/
 
const sumOfDigits = (str) => str.split('').reduce((acc, ele) => ele >= '0' && ele <= '9' ? acc + Number(ele) : acc, 0)

console.log(sumOfDigits("Javascript123"))

console.log ('\n---------------TASK33--------------/n');
/*
Array Factorial
Write a function named arrFactorial() which takes an array of numbers as argument and return
the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) -> [1, 2, 6, 24]
arrFactorial([0, 5]) -> [1,120]
arrFactorial([5 , 0, 6]) -> [120, 1, 720]
arrFactorial([]) -> []
*/


const arrFactorial = (arr) => arr.map((num) => {
    let count = 1;
    for(let i = 2; i <= num; i++){
       count *= i;
    }
    return count;
});

console.log(arrFactorial([1, 2, 3 ,4]) )
console.log(arrFactorial([0, 5, 6]))
