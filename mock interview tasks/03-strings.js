'\n---------------------------------------TASK-1------------------------------------\t'

/*
Double The Word
Write a function named as doubleWord() which takes a string word as an argument and returns the
given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
doubleWord("Tech") -> "TechTech"
doubleWord("Global") -> "GlobalGlobal"
*/

function doubleWord(str) {
    //return str.repeat(2);
    //return str + str;
    return `${str}${str}`;
}
console.log(doubleWord('bermet'))

'\n---------------------------------------TASK-2------------------------------------\t'
/* First Character
Write a function named as firstCharacter() which takes a string word as an argument and returns the
first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
*/

function firstCharacter(str) {
    return str[0];
}
console.log(firstCharacter('Tech'));

'\n---------------------------------------TASK-2------------------------------------\t'
/*
First Two Characters
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns
the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
*/

function firstTwoCharacters(str) {
    if(str.length >= 2) return str.slice(0, 2);
    return str;
}

console.log(firstTwoCharacters('Berme'))


'\n---------------------------------------TASK-3------------------------------------\t'
/*
Last Character
Write a function named as lastCharacter() which takes a string word as an argument 
and returns the last character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
 */

function lastCharacter(str) {
    return str.at(-1);
}
console.log(lastCharacter('Global'));

'\n---------------------------------------TASK-4------------------------------------\t'
/*
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns
the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/

function lastTwoCharacters(str) {
    if(str.length >= 2) return str.slice(-2);
    return str;
}
console.log(lastTwoCharacters('Tech'));

'\n---------------------------------------TASK-5------------------------------------\t'
/*
First and Last Characters
Write a function named as firstLast() which takes a string word as an argument and returns
the first and the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/

function firstLast(str) {
    if(str.length >= 2) return str[0] + str.at(-1);
    return str;
}

console.log(firstLast('Bermet'));

'\n---------------------------------------TASK-6------------------------------------\t'

/*
Write a function named as hasFive() which takes a string word as an argument and 
returns true if given string has at least 5 characters, and false otherwise when invoked.
*/

function hasFive(str) {
    return str.length >= 5;
}

console.log(hasFive('Bermet'));

'\n---------------------------------------TASK-7------------------------------------\t'
/*
Write a function named as middle() which takes a string word as an argument and returns the middle
character if the string has odd length, and returns the middle two characters if the string has 
even length when invoked.
NOTE: If the given word is empty, then return the empty string back.
*/

function middle(str) {
    if(str.length > 0 && str.length % 2 !== 0) {
        return str[(str.length - 1) / 2]
    }
    else if(str.length > 0 && str.length % 2 === 0) {
        return str[(str.length / 2) - 1] + str[(str.length / 2)]
    }
        return str;
}

console.log(middle(''));


'\n---------------------------------------TASK-8------------------------------------\t'
/*
Longer String
Write a function named as longer() which takes two string words as arguments and returns the string
that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.
Examples:
longer("Tech", "Global") -> "Global"
longer("Hello", "Hi") -> "Hello"
longer("Hello", "World") -> "Hello
*/

function longer(str1, str2) {
    if(str1.length > str2.length) return str1;
    else if (str2.length > str1.length) return str2;
    return str1;
}

console.log(longer('JavaScript', 'Bema'));

// Shorter

function shorter(str1, str2) {
    if(str1.length < str2.length) return str1;
    else if (str2.length < str1.length) return str2;
    return str2;
}

console.log(shorter('Type', 'Java'));

'\n---------------------------------------TASK-9------------------------------------\t'
/*
Concat Two String
Write a function named as concat() which takes two string words as arguments and returns the words
concatenated when invoked.
NOTE: Concatenation should always be as first string + second string .
Examples:
concat("Tech", "Global") -> "TechGlobal"
concat("Hello", "World") -> "HelloWorld"
concat("", "abc") -> "abc"
concat("123", "1234") -> "1231234"
*/

function concat(str1, str2) {
    //return str1 + str2;
    //return `${str1}${str2}`
    return str1.concat(str2);
}
console.log(concat('Tech', 'Global'));

'\n---------------------------------------TASK-10------------------------------------\t'
/*
Starts With Vowel
Write a function named as startsVowel() which takes a string word as an argument and returns true 
if given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
Examples:
startsVowel("Tech") -> false
startsVowel("Apple") -> true
startsVowel("abc") -> true
*/

function startsVowel(str) {
   return 'AEOUIaeoui'.includes(str[0]);
}
console.log(startsVowel('Bermet'));

console.log(isNaN('5'))

