/*
Assume you are given an array

const arr = [ el1, el2, el3, el4, el5, el6 ];


count, sum, average, min, max, shortest, longest, most expensive simply result being one simple result -> reduce method
returning some of the elements (subarray of the original) -> filter method
returning a same size new array with modified original array elements -> map
*/


const numbers = [-2, -5, 3, 0, 5, 8, 10]; 
console.log(numbers.filter((num) => num > 0));
console.log(numbers.filter((num) => num < 0));

console.log(numbers.map((num) => num > 0 ? 'even' : 'odd'));

console.log(numbers.reduce((acc, curr) => acc + curr, 0));

console.log(numbers.reduce((acc, curr) => curr > 0 ? acc + 1 : acc, 0));