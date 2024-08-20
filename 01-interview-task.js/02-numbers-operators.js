/* -----------------------TASK1-------------------------
Find if a number is even or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is even, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
2   -> true 
5   -> false 
10   -> true 
 */
let = ranNum1_10 = Math.floor(Math.random() * 10) + 1;

console.log(ranNum1_10);

console.log(ranNum1_10 % 2 === 0);


/* -----------------------TASK2-------------------------
Find if a number is odd or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is odd, print true. 
Otherwise, print false. 
 
Examples: 
1   -> true 
2   -> false 
5   -> true 
10   -> false 
 */

let oddNum = Math.floor(Math.random() * 10) + 1;

console.log(oddNum);

console.log(oddNum % 2 !== 0);

/* -----------------------TASK3-------------------------
Find if a number is positive or not. 
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is positive, print true. 
Otherwise, print false. 
 
Examples: 
-5   -> false 
-1   -> false 
0   -> false 
1   -> true 
5   -> true 
 */

let positiveNum = Math.floor(Math.random() * 11) + (-5)

console.log(positiveNum);

console.log(positiveNum >= 0);



/* /* -----------------------TASK4-------------------------
Find if a number is negative or not. 
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is negative, print true. 
Otherwise, print false. 
 
Examples: 
-5   -> true 
-1   -> true 
0   -> false 
1   -> false 
5   -> false 
 */ 

let negativeNum = Math.floor(Math.random() * 11) + (-5)

console.log(negativeNum);

console.log(negativeNum <= 0);

/*-----------------------TASK5-------------------------
Find if a number is divisible by 5 or not. 
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 5, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
5   -> true 
20   -> true 
37   -> false 
50   -> true 
 */

let divisible5 = Math.floor(Math.random() * 50) + 1;

console.log(divisible5);

console.log(divisible5 % 5 === 0);

/* -----------------------TASK6-------------------------
Find if a number is divisible by 7 or not. 
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 7, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
7   -> true 
35   -> true 
49   -> true 
50   -> false 
*/
 
let divisible7 = Math.floor(Math.random() * 50) + 1;

console.log(divisible7);

console.log(divisible7 % 7=== 0);
 
/* -----------------------TASK7-------------------------
Calculate the sum of 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the sum of the numbers and print it. 
 
Examples: 
3, 5     -> 8 
7, 3    -> 10 
5, 5     -> 10 
1, 10     -> 11 
10, 1     -> 11 

*/
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let sum = num1 + num2;

console.log(num1);
console.log(num2);
console.log(sum);

/* -----------------------TASK8-------------------------
 
Calculate the absolute difference between 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the absolute difference of the numbers and print it. 
 
Examples: 
3, 5     -> 2 
7, 3    -> 4 
5, 5     -> 0 
1, 10     -> 9 
10, 1     -> 9 
 */
let num3 = Math.floor(Math.random() * 10) + 1;
let num4 = Math.floor(Math.random() * 10) + 1;
let difference = Math.abs(num3 - num4);
console.log(num3);
console.log(num4);
console.log(difference);


/* -----------------------TASK9-------------------------
Calculate the product of 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the product of the numbers and print it. 
 
Examples: 
3, 5     -> 15 
7, 3    -> 21 
5, 5     -> 25 
1, 10     -> 10 
10, 1     -> 10 
*/
let num5 = Math.floor(Math.random() * 10) + 1;
let num6 = Math.floor(Math.random() * 10) + 1;
let product = num5 * num6;

console.log(num5);
console.log(num6);
console.log(product);

/*-----------------------TASK10-------------------------
Calculate the square of a number. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the square of the number and print it. 
 
Examples: 
1   -> 1 
2   -> 4 
5   -> 25 
10   -> 100 
*/
let num7 = Math.floor(Math.random() * 10) + 1;

console.log(num7);
console.log(num7 * num7);
console.log(Math.pow(num7, 2));
console.log(num7 ** 2);

/*-----------------------TASK11-------------------------
Calculate the cube of a number. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the cube of the number and print it. 
 
Examples: 
1   -> 1 
2   -> 8 
5   -> 125 
10   -> 1000 
 */
let num8 = Math.floor(Math.random() * 10) + 1;

console.log(num8);
console.log(num8 ** 3);
console.log(Math.pow(num8, 3));


/*-----------------------TASK12-------------------------
Convert miles to kilometers. 
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered 
as a mile unit. 
Convert miles unit to kilometers and print it. 
Please assume that 1 mile equals 1.6 kilometers. 
 
Examples: 
1   -> 1.6 
2   -> 3.2 
5   -> 8 
*/
let num9 = Math.floor(Math.random() * 10) + 1;
let kilometers = num9 * 1.6;

console.log(num9);
console.log(kilometers);

/*-----------------------TASK13-------------------------

Convert kilograms to pounds. 
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as a kilogram unit. 
Convert kilogram unit to pounds and print it. 
Please assume that 1 kilogram equals 2.2 pounds. 
 
Examples: 
1   -> 2.2 
20   -> 44 
75   -> 165 
100   -> 220 
 */
let num10 = Math.floor(Math.random() * 100) + 1;
let pound = num10 * 2.2;

console.log(num10);
console.log(pound);

 /* -----------------------TASK14-------------------------
Find if 2 numbers are equal or not. 
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). 
If the numbers are equal, print true. 
Otherwise, print false. 
 
 
Examples: 
1, 1     -> true 
1, 2    -> false 
2,3     -> false 
2,2     -> true 
3, 3     -> false 
 */

let num11 = Math.floor(Math.random() * 3) + 1;
let num12 = Math.floor(Math.random() * 3) + 1;
console.log(num11)
console.log(num12);
console.log(num11 === num12);

/* -----------------------TASK15-------------------------
Find if an age is allowed to get Driver License or not. 
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as an age. 
If the age is more than or equal to 16, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
15   -> false 
16   -> true 
45   -> true 
100   -> true 
*/
let age = Math.floor(Math.random() * 100) + 1;
console.log(age)
console.log(age >= 16);
'\t -----------------------TASK15-------------------------\n'

let rNum1 = Math.floor(Math.random() * 10) + 1;
let rNum2 = Math.floor(Math.random() * 10) + 1;
let rNum3 = Math.floor(Math.random() * 10) + 1;
console.log(rNum1, rNum2, rNum3);
console.log(Math.max(rNum1, rNum2, rNum3));

console.log(Math.min(rNum1, rNum2, rNum3));

'\t -----------------------TASK16-------------------------\n'
/*
Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the greatest and the smallest numbers and print their absolute difference.
Examples:
3, 5, 2 -> 3
7, 3, 1 -> 6
5, 5, 5 -> 0
1, 10, 9 -> 9
10, 1, 2 -> 9
*/

let rNumber1 = Math.floor(Math.random() * 10) + 1;
let rNumber2 = Math.floor(Math.random() * 10) + 1;
let rNumber3 = Math.floor(Math.random() * 10) + 1;

let max = Math.max(rNumber1, rNumber2, rNumber3);
let min = Math.min(rNumber1, rNumber2, rNumber3);
let abs = max - min;

console.log(max);
console.log(min);
console.log(abs);

'\t -----------------------TASK17-------------------------\n'
/*Find the quarter of a random number between 1 and 100. 
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which quarter of the range the number falls into and print it. 
1st quarter is 1-25 
2nd quarter is 26-50 
3rd quarter is 51-75 
4th quarter is 76-100 
 
Examples: 
15     -> 1st quarter 
73    -> 3rd quarter 
39     -> 2nd quarter 
87     -> 4th quarter 
 */


let ranNum = Math.floor(Math.random() * 100) + 1;
console.log(ranNum);

if (ranNum <= 25) console.log('1st quarter');
else if (ranNum <= 50) console.log('2nd quarter');
else if (ranNum <= 75) console.log('3rd quarter');
else console.log ('4th quarter');


'\t -----------------------TASK18-------------------------\n'
/*
Find the midpoint of a random number between 1 and 100. 
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which half of the range the number falls into and print it. 
1st half is 1-50 
2nd half is 51-100 
 
Examples: 
15     -> 1st half 
50    -> 1st half 
51     -> 2nd half  
87     -> 2nd half  
100     -> 2nd half 
*/

let ranNum1 = Math.floor(Math.random() * 100) + 1;
console.log(ranNum1);
    
if(ranNum1 <= 50) console.log('1st half');
else console.log('2nd half');

'\t -----------------------TASK18-------------------------\n'
/*
Find if sum of 2 random numbers is even or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.
Examples:
3, 5 -> true
7, 3 -> true
5, 5 -> true
1, 10 -> false
10, 1 -> false
*/
let r1 = Math.floor(Math.random() * 10) + 1;
let r2 = Math.floor(Math.random() * 10) + 1;
let sum1 = r1 + r2;

console.log(r1, r2);
console.log(sum1 % 2 === 0);

// if odd print true
let product1 = r1 * r2;
console.log(product1 % 2 !== 0);

'\t -----------------------TASK19-------------------------\n'
/*
Area of a rectangle
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y
Examples:
rectangleArea(5, 4) -> 20
rectangleArea(3, 7) -> 21
rectangleArea(6, 10) -> 60
*/

function rectangleArea(x, y) {
    return x * y;
}

console.log(rectangleArea(3, 7));

//Square area
function squareArea(x) {
    return x * x
}

console.log(squareArea(3));



'\t -----------------------TASK-20-------------------------\n'
/*
Perimeter of a rectangle.
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when
invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Perimeter = 2 * (x + y)
Examples:
rectanglePerimeter(5, 4) -> 18
rectanglePerimeter(3, 7) -> 20
rectanglePerimeter(6, 10) -> 32
*/

function rectanglePerimeter(x, y) {
    return 2 * (x + y);
}
console.log(rectanglePerimeter(5, 4));

// Square Perimeter
function SquarePerimeter(x) {
    return 4 * x;
}
console.log(SquarePerimeter(4));

