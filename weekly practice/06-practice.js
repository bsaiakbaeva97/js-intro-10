const { getRandomNumber } = require('../utils/MathHelper.js');

for(let i = 1; i <= 10; i++) {
    console.log(i);
  }


  for(let i = 100; i >= 0; i--) {
    console.log(i);
  }

  for(let i = 0; i <= 50; i += 2) {
    console.log(i);
  }



  for(let i = 0; i <= 50; i += 2) {
    console.log(i);
  }
  
  // OR if starting point is 1

  for(let i = 0; i <= 50; i++) {
    if(i % 5 === 0) console.log(i);
  }

  // Find the sum of all numbers from 1 to 5 (both inclusive)
let sum = 0
for(let i = 1; i <= 5; i++) {
    sum += i
 }

 console.log(sum);

// Find the sum of all numbers from 10 to 15 (both inclusive)
let sum1 = 0
for(let i = 10; i <= 15; i++) {
    sum1 += i
 }

 console.log(sum1); // 75

 // Find the product of all numbers from 1 to 6 (both inclusive)

 let product = 1
 for(let i = 1; i <= 6; i++) {
     product *= i
  }
 
  console.log(product);
 

  let str = 'TechGlobal School'

 for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }

 let str1 = 'TechGlobal School'

 let count = 0;

 for(let i = 0; i < str1.length; i++) {
   if(str1[i] === 'o') count++; 
 }
 
 console.log(count);
  


 let r1 = getRandomNumber(10, 20);
 console.log(r1);

 for(let i = 1; i <= r1; i++){
    if (i % 2 !== 0) console.log(i);
 }



 let r2 = getRandomNumber(1, 10);

 console.log(`The random number is ${r2}`);

 let product1 = 1
 for(let i = 1; i <= r2; i++){
    product1 *= i;
 }
 console.log(product1);

let ran1 = getRandomNumber(1, 10);
let ran2 = getRandomNumber(1, 10);

console.log(`The random numbers are ${ran1} and ${ran2}`);

let max = Math.max(ran1, ran2);
let min = Math.min(ran1, ran2);

 for(let i = min; i <= max; i++) {
    console.log(i);
 }

 