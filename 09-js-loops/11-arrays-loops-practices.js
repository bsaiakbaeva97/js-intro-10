
const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

console.log('\n-------------------------TASK-1---------------------\n')

// Count how many positive numbers you have in the array -> 4

let count = 0;
for(const num of numbers) {
    if(num > 0) count++;
}
console.log(count);

console.log('\n-------------------------TASK-2---------------------\n')

// Count how many negative numbers you have in the array -> 4

let countNeg = 0;
for(const num of numbers) {
    if(num < 0) countNeg++;
}
console.log(countNeg);

console.log('\n-------------------------TASK-3---------------------\n')

// Count how many even numbers you have in the array -> 7

let countEven = 0;
for(const num of numbers) {
    if(num % 2 === 0) countEven++;
}
console.log(countEven);

console.log('\n-------------------------TASK-4---------------------\n')

// Count how many odd but not negative numbers you have in the array -> 2

let countOddPos = 0

for(const num of numbers) {
    if(num % 2 !== 0 && num > 0) countOddPos++
}

console.log(countOddPos);
