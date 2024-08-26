const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];

console.log('\n-------------------------TASK-1---------------------\n')

// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4

let sum = 0;
let avarage;

for (const num of numbers) {
  sum += num;
}

console.log(sum);
console.log(sum / numbers.length);


console.log('\n-------------------------TASK-2---------------------\n')

let product = 1;
for(i = 3; i < numbers.length; i++) {
    product *= numbers[i];
}
console.log(product);



