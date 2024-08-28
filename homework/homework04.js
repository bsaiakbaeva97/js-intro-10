const { getRandomNumber } = require('../utils/MathHelper.js');

console.log('\n---------------TASK-1-----------------\n');


for(i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i);
}

console.log('\n---------------TASK-2-----------------\n');

for(i = 1; i <= 50; i++) {
    if(i % 2 === 0 && i % 3 === 0) console.log(i);
}

console.log('\n---------------TASK-3-----------------\n');

for(i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i);
}

console.log('\n---------------TASK-4-----------------\n');


for(i = 0; i <= 7; i++) {
   console.log(`The square of ${i} is = ${i ** 2}`);
} 


console.log('\n---------------TASK-5-----------------\n');

let sum = 0;
for(i = 1; i <= 10; i++){
    sum += i;
}
console.log(sum);

console.log('\n---------------TASK-6-----------------\n');

let ranNum = getRandomNumber(1, 10);
console.log(`The random number is ${ranNum}`);

let factorial = 1;
for(i = 1; i <= ranNum; i++) {
    factorial *= i;
}

console.log(factorial);

console.log('\n---------------TASK-7-----------------\n');

attempts = 0;
let ranNum1;
while(true) {
    ranNum1 = getRandomNumber(1, 100);
    attempts++
    if(ranNum1 % 5 === 0) break;
}

console.log(`The random number is ${ranNum1} and it took ${attempts} attempt/s to generate it`);

console.log('\n---------------TASK-8-----------------\n');

const arr = ['Germany', 'Argentina', 'Ukraine', 'Romania']
console.log(arr);

let newArr = arr.sort()
console.log(newArr);

console.log('\n---------------TASK-9-----------------\n');

const arr1 = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(arr1);

console.log(arr1.includes('Pluto'));

console.log('\n---------------TASK-10-----------------\n');


const arr2 = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(arr2.sort());

console.log(arr2.includes('Garfield' && 'Felix'));


console.log('\n---------------TASK-11-----------------\n');
/*
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element

Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/

const arr3 = [10.5, 20.75, 70, 80, 15.75]
console.log(arr3);

for(const element of arr3){
    console.log(element);
}

console.log('\n---------------TASK-12-----------------\n');

const arr4 = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ];

// Output the entire array.
   
console.log(arr4);

// Output how many elements starts with 'B' or 'P', ignoring cases.

let countBP = 0;
let countPenBook = 0;

for(const element of arr4) {
   if(element.toLowerCase().startsWith('p') || element.toLowerCase().startsWith('b')) 
    countBP ++;
   if(element.toLowerCase().includes('book') || element.toLowerCase().includes('pen')) 
    countPenBook ++;
}

console.log(`Elements starting with 'B' or 'P' = ${countBP}`);
console.log(`Elements having 'book' or 'pen' = ${countPenBook}`);

 
console.log('\n---------------TASK-13-----------------\n');
/*
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
 */

const nums = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]
console.log(nums);

let count10 = 0;
let countLess10 = 0;
let countMore10 = 0;

for( const num of nums) {
    if(num > 10) countMore10++;
    else if(num < 10) countLess10++;
    else count10++
}

console.log(`Elements that are more than 10 = ${countMore10}`);
console.log(`Elements that are less than 10 = ${countLess10}`);
console.log(`Elements that are 10 = ${count10}`);

console.log('\n---------------TASK-14-----------------\n');

const array1 = [ 5, 8, 13, 1, 2 ]
const array2 = [ 9, 3, 67, 1, 0 ]
const array3 = [];

for(let i = 0; i < array1.length; i++) {
  array3.push(Math.max(array1[i], array2[i]));
}
console.log(array1);
console.log(array2);
console.log(array3);

console.log('\n---------------TASK-16-----------------\n');
const array = [3, 7, 10, 0, 3, 10]
const dublicates = [];

for(const element of array) {
    if(element === element[0]) dublicates.push[element];
}

 console.log(dublicates);

console.log('\n---------------TASK-17-----------------\n');

let string = 'I like JavaScript'

function reverseStringWords(string) {
  return string.split('').reverse().join("").trim();

}

console.log(reverseStringWords(string));

console.log('\n---------------TASK-18-----------------\n');


function getEvens(num1, num2) {
    let numMax = Math.max(num1, num2);
    let numMin = Math.min(num1, num2);
    const newArray = [];

    for(i = numMin; i <= numMax; i++){
       if(i % 2 === 0) newArray.push(i);
    }
    
   return newArray;
}

console.log(getEvens(17, 8));

console.log('\n---------------TASK-19-----------------\n');


function getEvens(num1, num2) {
    let numMax = Math.max(num1, num2);
    let numMin = Math.min(num1, num2);
    const newArrNumbers = [];
    for(i = numMin; i <= numMax; i++){
       if(i % 5 === 0) newArrNumbers.push(i);
    }
    
   return newArrNumbers;
}

console.log(getEvens(2, 4));

