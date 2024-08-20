/* TASK-1
Requirement:
Write a function named as tripleWord() which takes a string word as an 
argument and returns the given word back tripled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
tripleWord("Tech")  -> "TechTechTech"
tripleWord("Global")  -> "GlobalGlobalGlobal"
 */

function tripleWord(str1) {
   return str1.repeat(3);
}
console.log(tripleWord('Global'));

/* TASK-2
Write a function named as has4() which takes a string word as an 
argument and returns true if given string has at least 4 characters, and 
false otherwise when invoked.
Examples:
has4("Tech")  -> true
has4("Global")  -> true
has4("")  -> false
has4("12345")  -> true
has4("abc")   -> false
*/

function has4(str2) {
    return str2.length <= 4;
}

console.log(has4(''));

/* TASK 3
Write a function named as celciusToFahrenheit() which takes a number 
to be considered as Celcius value and returns the Fahrenheit value when 
invoked.
Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 
to perform the conversion from Celsius to Fahrenheit.
•Multiply the Celsius temperature by 9.
•Divide the result by 5.
•Add 32 to the result.
Examples:
celciusToFahrenheit(20)  -> 68
celciusToFahrenheit(25)  -> 77
celciusToFahrenheit(0)  -> 32
*/
function celciusToFahrenheit(num1) {
    let conversion = (num1 * 9) / 5 + 32
    return conversion;
}

console.log(celciusToFahrenheit(25));

/* TASK4
Write a function named as kgToPounds() which takes a number to be 
considered as Kilograms value and returns the Pounds value when 
invoked.
Conversion Formula: The function uses the formula kilogram * 2.2 to 
perform the conversion from Kilograms to Pounds.
•Multiply the Kilograms value by 2.2.
Examples:
kgToPounds(1)  -> 2.2
kgToPounds(20)  -> 44
kgToPounds(75)  -> 165
kgToPounds(100)  -> 220
*/

function kgToPounds(num2) {
    let pound = num2 * 2.2
    return pound;
}

console.log(kgToPounds(20));

/*TASK-5
Write 2 functions named as rectangleArea() and rectanglePerimeter() 
which calculate the area and perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula:
•Area: x * y
•Perimeter 2 * (x + y)
Examples:
rectangleArea(5, 4)  -> 20
rectangleArea(3, 7)  -> 21
rectangleArea(6, 10)  -> 60
rectanglePerimeter(5, 4)  -> 18
rectanglePerimeter(3, 7)  -> 20
rectanglePerimeter(6, 10)  -> 32
*/

function rectangleArea (x,y) {
    let area = x * y
    return area;
}

function rectanglePerimeter(x, y) {
    let perimeter = 2 * (x + y)
    return perimeter;
}

console.log(rectangleArea (5, 4));
console.log(rectanglePerimeter(5, 4));

/* TASK-6
Write 2 functions named as squareArea() and squarePerimeter() which 
calculate the area and perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:
•Area: x * x
•Perimeter 4 * x
Examples:
squareArea(5)  -> 25
squareArea(3)  -> 9
squareArea(6)  -> 36
squarePerimeter(5)  -> 20
squarePerimeter(3)  -> 12
squarePerimeter(6)  -> 24
*/

function squareArea (x) {
    let area = x * x
    return area;
}

function squarePerimeter(x) {
    let perimeter = 4 * x
    return perimeter;
}

console.log(squareArea(5));
console.log(squarePerimeter(6));