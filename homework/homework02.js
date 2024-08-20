console.log('\n------------------------TASK01------------------------/n');

let str1 = '5', str2 = '2';
num1 = Number(str1);
num2 = Number(str2);

console.log(`The sum of ${num1} and ${num2} is = ${(num1) + (num2)}`);
console.log(`The product of ${num1} and ${num2} is = ${(num1) * (num2)}`);
console.log(`The division of ${num1} and ${num2} is = ${(num1) / (num2)}`);
console.log(`The subtraction of ${num1} and ${num2} is = ${(num1) - (num2)}`);
console.log(`The remainder of ${num1} and ${num2} is = ${(num1) % (num2)}`);
console.log(`The exponantiation of ${num1} and ${num2} is = ${(num1) ** (num2)}`);

console.log('\n------------------------TASK02------------------------/n');

let s1 = '200', s2 = '-50';
s1 = (Number(s1));
s2 = (Number(s2));

console.log(`The greatest value is = ${Math.max(s1, s2)}`);
console.log(`The smallest value is = ${Math.min(s1, s2)}`);
console.log(`The avarage is = ${(s1 + s2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(s1-s2)}`);


console.log('\n------------------------TASK03------------------------/n');

let ran1= Math.floor(Math.random() * 50) + 1;
let ran2= Math.floor(Math.random() * 50) + 1;

console.log(ran1);
console.log(ran2);

console.log(`The absolute difference is = ${Math.abs(ran1 - ran2)}`);


console.log('\n------------------------TASK04------------------------/n');

let r1= Math.floor(Math.random() * 50) + 1;
let r2= Math.floor(Math.random() * 50) + 1;
let r3= Math.floor(Math.random() * 50) + 1;
let r4= Math.floor(Math.random() * 50) + 1;
let r5= Math.floor(Math.random() * 50) + 1;

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);

console.log(`The max value = ${Math.max(r1, r2, r3,  r4, r5)}`);
console.log(`The min value = ${Math.min(r1, r2, r3, r4, r5)}`);

console.log('\n------------------------TASK05------------------------/n');

let random1= Math.floor(Math.random() * 51) + 1;
let random2= Math.floor(Math.random() * 51) + 1;
let random3= Math.floor(Math.random() * 51) + 1;

console.log(`The number 1 = ${random1}`);
console.log(`The number 2 = ${random2}`);
console.log(`The number 3 = ${random3}`);
console.log(`The sum of numbers is = ${random1 + random2 + random3}`);

console.log('\n------------------------TASK06------------------------/n');

let ranNum1= Math.floor(Math.random() * 100) + 1;
let ranNum2= Math.floor(Math.random() * 100) + 1;
let ranNum3= Math.floor(Math.random() * 100) + 1;

console.log(ranNum1, ranNum2, ranNum3);
console.log(ranNum1 > 25 && ranNum2 > 25 && ranNum3 > 25);


console.log('\n------------------------TASK07------------------------/n');

let name = 'David';

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]} `);
console.log(`The last character in the name is = ${name.at(-1)}`);
console.log(`The first 3 characters in the name are = ${name.slice(0, 3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(-3)}`);
