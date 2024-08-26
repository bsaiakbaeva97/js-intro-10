const numbers = [3, 4, 7, 3, 2, 2, 7];

console.log('\n-------------------------TASK-1---------------------\n')

// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19
let product = 1;
let index = 0
for( const num of numbers) {
    if(index % 2 !== 0) product *= num;
    index++;
}

console.log(product);

const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0, 9, 4, 3];

console.log('\n-------------------------TASK-2---------------------\n')

// Put together all these elements from a1, a2 and a3 in a descending order
// in a new array -> [10, 9, 7, 5, 4, 3, 3, 3, 1, 0]

let newArr = [...a1, ...a2, ...a3];

newArr.sort((a, b) => b - a); //[10, 9, 7, 5, 4, 3, 3, 3, 1, 0]

console.log(newArr);

console.log('\n-------------------------TASK-3---------------------\n')


/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->     [ 5, 8, 2, 1, 2 ]
Second array ->   [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];
let arr3 = [];

for(i = 0; i < arr1.length; i++){
    arr3 [i] = arr1[i] * arr2[i]
}

console.log(arr3);

