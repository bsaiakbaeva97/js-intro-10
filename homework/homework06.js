console.log('\n---------------TASK-1-----------------\n');
/*
Requirement:
Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.

Examples:
noSpace("") 			->  ""
noSpace("Javascript") 		->  "Javascript"
noSpace("    Hello   ") 		-> "Hello"
noSpace(" Hello World   ") 	-> "HelloWorld”
noSpace("Tech Global") 		-> "TechGlobal"
*/

const noSpace = (str) => str.split(' ').join('');

console.log(noSpace('Hello World'));
 

console.log('\n---------------TASK-2-----------------\n');
/*
Requirement:
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.

Examples:
replaceFirstLast("") 		->  ""
replaceFirstLast("Hello") 		->  "oellH"
replaceFirstLast("Tech Global") 	-> "lech GlobaT"
replaceFirstLast("A") 		-> ""
replaceFirstLast("    A      ") 	-> ""
*/

const replaceFirstLast = (str) => str.length > 2 ? str.trim(' ').at(-1) + str.slice(1, -1) + str[0] : '';
   
console.log(replaceFirstLast('Hello'));
console.log(replaceFirstLast("Tech Global")); 

console.log('\n---------------TASK-3-----------------\n');

/*
Requirement:
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.

Examples:
hasVowel("") 		-> false
hasVowel("Javascript") 		-> true
hasVowel("Tech Global") 		-> true
hasVowel("1234") 		-> false
hasVowel("ABC") 		-> true
*/

const hasVowel = (str) => [...str].some((character) => 'aeouiAEOUI'.includes(character));

console.log(hasVowel("1234"));



console.log('\n---------------TASK-4-----------------\n');
/*
Requirement:
Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth 
and returns a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.

Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"

*/

function checkAge(birthYear) {
    let currentYear = 2023;
    let age = currentYear - birthYear;

    if (age < 16) console.log('AGE IS NOT ALLOWED')
    else if (age > 120) console.log ('AGE IS NOT VALID')
    else console.log('AGE IS ALLOWED');
}

checkAge(2010);

console.log('\n---------------TASK-5-----------------\n');
/*
Requirement:
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers​.

Examples:
averageOfEdges(0, 0, 0) 		-> 0
averageOfEdges(0, 0, 6) 		-> 3
averageOfEdges(-2, -2, 10) 	-> 4
averageOfEdges(-3, 15, -3) 	-> 6
averageOfEdges(10, 13, 20) 	-> 15
*/

function averageOfEdges(num1, num2, num3) {
    let nums = [num1, num2, num3];
    return (Math.max(...nums) + Math.min(...nums)) / 2;
}

console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));		
console.log(averageOfEdges(10, 13, 20)); 	

console.log('\n---------------TASK-6-----------------\n');

/*
Requirement:
Write a function named noA() which takes an array of strings as argument and will return 
a new array with all elements starting with "A" or "a" replaced with "###".

Examples:
noA(["javascript", "hello", "123", "xyz"]) 	->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) 	->  ["###", "123", "###", "javascr0ipt"]
noA(["apple", "abc", "ABC", "Alex", "A"]) 	-> ["###", "###", "###", "###", "###"]
*/

const noA = (str) => str.map((char) => char.toLowerCase().startsWith('a') ? '###' : char);

console.log(noA(["javascript", "hello", "123", "xyz"]))
console.log(noA(["a", "123", "ABC", "javascript"]))
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]) );

console.log('\n---------------TASK-7-----------------\n');
/*
Requirement:
Write a function named no3and5() which takes an array of integer numbers as argument and will return 
a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101

Examples:
no3and5([7, 4, 11, 23, 17]) 	-> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6]) 		-> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) 	-> [99, 11, 100, 13, 14, 101]
*/

function no3and5(nums) {
   return nums.map((num) => {

        if((num % 5 === 0 && num % 3 === 0)) return 101
        else if(num % 3 === 0) return 100
        else if(num % 5 === 0) return 99
        return num;

    });
}

console.log(no3and5([3, 5, 15, 23, 17]));

console.log('\n---------------TASK-8-----------------\n');
/*
Requirement:
Write a function named countPrimes() which takes an array of integer numbers as 
argument and will return the number of the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.

Examples:
countPrimes([-10, -3, 0, 1]) 	-> 0
countPrimes([7, 4, 11, 23, 17]) 	-> 4
countPrimes([41, 53, 19, 47, 67]) 	-> 5

*/
// Filter method
const countPrimes = (nums) => nums.filter((num) => (num === 2) || (num % 2 !== 0 && num > 2)).length;

console.log(countPrimes([2, -10, -3, 0, 1]));
console.log(countPrimes([41, 53, 19, 47, 67]));
console.log(countPrimes([7, 4, 11, 23, 17]));


console.log('\n---------------TASK-9-----------------\n');
/*
Requirement:
Write a function named removeDuplicates() which takes an array argument and returns a new array with all the duplicates removed.

Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) 		-> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) 			-> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) 			-> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) 	-> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) 		-> ["1", "2", "3"]

*/

function removeDuplicates(array) {
    let duplicate = [];
    array.map((ele) => !duplicate.includes(ele) ? duplicate.push(ele) : '');
    return  duplicate;
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))


console.log('\n---------------TASK-10-----------------\n');
/*
Requirement: 
Write a method named isDateFormatValid() that takes a string as an argument and returns 
true if the given date is valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>


Examples:
isDateFormatValid("") 			-> false
isDateFormatValid("15/30/2020") 		-> false
isDateFormatValid("10-30-2020 ") 		-> false
isDateFormatValid("10.30.2020") 		-> false
isDateFormatValid("5/30/2020") 		-> false
isDateFormatValid("05/30/2020 ") 		-> true
isDateFormatValid("10/2/2020") 		-> false
isDateFormatValid("10/02/2020 ") 		-> true
*/



console.log('\n---------------TASK-11-----------------\n');

/*
Requirement: 
Write a method named secondMax() takes an array argument and returns the second max 
number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, 
it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.


Examples:
secondMax([7, 4, 4, 4, 23, 23, 23]) 	-> 7
secondMax([3, 4, 5, 6]) 		-> 5
secondMax([10]) 		-> 10
*/

function secondMax(nums) {
    
    let max = Number.MIN_VALUE;
    let secondMax = Number.MIN_VALUE;

    nums.forEach((num) => {
    if(nums.length === 1){
        secondMax = num;
        }
    else if(num > max){
        secondMax = max;
        max = num;
        }
    else if(num < max && num > secondMax){
        secondMax = num;
        }
    });

   return secondMax;
}

console.log(secondMax([4, 4, 4, 23, 23, 23]));

console.log('\n---------------TASK-12-----------------\n');

/* 
Requirement: 
Write a method named secondMin() takes an array argument and returns the second
 min number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 
1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.


Examples:
secondMax([7, 4, 4, 4, 23, 23, 23]) 	-> 7
secondMax([3, 4, 5, 6]) 		-> 4
secondMax([10]) 		-> 10
*/

function secondMin(nums){

    let min = Number.MAX_VALUE;
    let secondMin = Number.MAX_VALUE;

    nums.forEach((num) => {
        if(nums.length === 1){
            secondMin = num;
        }
        else if(num < min){
            secondMin = min
            min = num;
        }
        else if(num > min && num < secondMin){
            secondMin = num;
        }
    })
    return secondMin;
}

console.log(secondMin([3, 4, 5, 6]))
console.log(secondMin([7, 4, 4, 4, 23, 23, 23]))

console.log('\n---------------TASK-13-----------------\n');

/*
Requirement: 
Write a method named mostRepeated() takes an array argument and returns the most 
counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one element 
will always be more than the others.


Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) 			-> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) 	-> "pen"
mostRepeated([10]) 					-> 10
mostRepeated(["TechGlobal"]) 				-> "TechGlobal"


1. occurance
2. count
3. max
*/



function mostRepeated(arr) {
    let repeatedEl;
    let max = 0;

    for (let i = 0; i < arr.length; i++){
     let count = 0;
        for(j = i+1; j < arr.length; j++){
            if(arr[i]=== arr[j]) count++;
            }
        if(count > max){
        max = count;
        repeatedEl = arr[i];
     }
    }
    return repeatedEl;
}
console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));

