const{getRandomNumber} = require('../utils/MathHelper.js'); // import other function from another file/folder
console.log('\n------------------TASK-1-----------------\n')
let r1 = getRandomNumber(1, 10);

 console.log(r1);
// 
if(r1 === 7) {
    console.log(true)
} else {
    console.log(false);
}

r1 === 7 ? console.log(true) : console.log(false);

console.log('\n------------------TASK-2-----------------\n')
// Another way of using ternary operator

let gender = 'female'
let name = gender === 'female' ? 'Jane' : 'John';
console.log(name);

console.log('\n------------------TASK-2-----------------\n')

let r2 = getRandomNumber(1, 10)
console.log(r2);

if (r2 % 2 === 0){
    console.log('Random number is even')
} else {
    console.log('Random number is odd');
}

// Ternary operator
r2 % 2 === 0 ? console.log('Random number is even') : console.log('Random number is odd');

let resultEvenOdd = r2 % 2 === 0 ? 'Random number is even' : 'Random number is odd'
console.log(resultEvenOdd);