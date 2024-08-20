/* Write a program that generates a random number 
between 0 and 50 (both 0 and 50 are included)
Multiply number with 5 and print the result with below 
message
Expected result:

The random number * 5 = {result}
*/

let ranNum0_50 = Math.floor(Math.random () * 51);

console.log(ranNum0_50);

console.log(`The random number ${ranNum0_50} * 5 = ${ranNum0_50 * 5}`);


//-----------------TASK2----------------------

/**
Requirement:
Write a program that generates two random numbers 
between 1 and 10 (both 1 and 10 are included)
Find the min number
Find the max number
Find the absolute difference of the numbers
Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}
 */

let ranNum1_10 = Math.ceil(Math.random () * 10);
console.log(ranNum1_10);


let ranNum2_10 = Math.ceil (Math.random () * 10);
console.log(ranNum2_10);


console.log(`Min number =  ${Math.min (ranNum1_10, ranNum2_10)}`);
console.log(`Max number = ${Math.max (ranNum1_10, ranNum2_10)}`);
console.log(`Difference = ${Math.abs (ranNum1_10 - ranNum2_10)}`);


//-----------------TASK3----------------------

/*
Requirement:
Write a program that generates a random number 
between 50 and 100 (both 50 and 100 are included)
Find the remainder of the number by 10
Expected result:
The random number % 10 = {result}
*/

let num50_100 = Math.floor(Math.random () * 51) + 50;
console.log(num50_100);

console.log(`The random number % 10 =  ${num50_100 % 10}`);

//-----------------TASK4----------------------

/*
Requirement:
Write a program that generates 5 random numbers between 
1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the 
points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points
Test data:
3 7 2 1 8
Expected result:
59
*/

let ranNum1 = Math.ceil(Math.random () * 10);
let ranNum2 = Math.ceil(Math.random () * 10);
let ranNum3 = Math.ceil(Math.random () * 10);
let ranNum4 = Math.ceil(Math.random () * 10);
let ranNum5 = Math.ceil(Math.random () * 10);

console.log(ranNum1, ranNum2, ranNum3, ranNum4, ranNum5);

points= 0

//Math.floor(Math.random()* range) + startNumber


console.log(Math.floor(Math.random() * 50) + 51) 

// generate a random number from 111 to 126 both included

console.log(Math.floor(Math.random() * 16) + 111) 


let random = Math.floor(Math.random() * (126 - 111 + 1) + 111);
console.log(random);


console.log(Math.round(.4))





/*Task11:
Requirement
-Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
	favBook = JS Algorithms & Data Structures
	favColor = Blue
	favNumber = 7

Expected output: 
The favorite book is JS Algorithms & Data Structures 
The favorite color is Blue
The favorite number is 7
*/

let favBook = "Harry Potter";
let favColor = "Blue";
let favNumber = 7;

//Bit Recomended: console.log('The favorite book is ' + favBook + '\nThe favorite color is ' + favColor + ' \nThe favorite number is ' + favNumber)

console.log(
`The favorite book is ${favBook} 
The favorite color is ${favColor} 
The favorite number is ${favNumber}`
)



console.log('\n------------------TASK02------------------\n');

console.log(`\tJavaScript is a high-level programming language primarily used to \nbuild web applications. It is not limited to the web; it can also be used \nfor the backend development with technologies like Node.js. \n\n\tIt is open source and has a huge community support, which means \nthere are plenty of resources and support available for learning. It \nuses a syntax like other programming languages and easy to learn.`);
console.log(
    `    JavaScript is a high-level programming language primarily used to 
build web applications. It is not limited to the web; it can also be used 
for the backend development with technologies like Node.js.

    It is open source and has a huge community support, which means 
there are plenty of resources and support available for learning. It 
uses a syntax like other programming languages and easy to learn.`
);


/*Task4:
Requirement:
Write a program that generates 5 random numbers between 
1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the 
points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points

Test data:
3 7 2 1 8
Expected result:
59
*/
//Math.floor(Math.random()* range) + startNumber

let range = 10;
let startNumber = 1;

let rand1 = Math.floor(Math.random()* range) + startNumber;
let rand2 = Math.floor(Math.random()* range) + startNumber;
let rand3 = Math.floor(Math.random()* range) + startNumber;
let rand4 = Math.floor(Math.random()* range) + startNumber;
let rand5 = Math.floor(Math.random()* range) + startNumber;

console.log(rand1,rand2,rand3,rand4,rand5)

let points = 0;//0 50 90 96 114 122

points += rand1 * 5;
points += rand2 * 4;
points += rand3 * 3;
points += rand4 * 2;
points += rand5 * 1;

console.log(points)

//-----------------TASK5----------------------

/*
Requirement:
Write a program that generates 4 random numbers as 
below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)
Find the absolute difference between the max and min 
number
Find the absolute difference between the second and 
third number
Find the average of all 4 numbers
Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
 */

let r1 = Math.floor(Math.random() * 25) + 1;
let r2 = Math.floor(Math.random() * 25) + 26;
let r3 = Math.floor(Math.random() * 25) + 51;
let r4 = Math.floor(Math.random() * 25) + 76;

console.log(r1, r2, r3, r4);

console.log(`Difference of max and min = ${Math.abs(Math.max(r1, r2, r3, r4) - Math.min(r1, r2, r3, r4))}`);
console.log(`Difference of second and third = ${Math.abs(r2 - r3)}`);
console.log(`Average of all = ${(r1 + r2 + r3 + r4) / 4}`);
