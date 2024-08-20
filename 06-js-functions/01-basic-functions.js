/*
Create a function which prints 'Hi' when invoked
*/
//This ia a void zero argument function
function sayHi() {
    console.log('Hi')
}
sayHi();

/*
Create a function which takes a string name as an argument
sayHello('Alex') - 'Hello, Alex'
sayHello('Jane') - 'Hello, Jane'
*/
function sayHello(name) {
    return `Hello, ${name}!`;
}

let name = 'Bermet' 
console.log(sayHello('Bermet'));

let result = sayHello('Bermet');
console.log(result);

/*
Write a function named as greet which takes two argument as name and greeting and outputs '${greeting}, {name}!'

greet('Good Morning', 'John'); // Output: 'Good Morning, John!'
greet('Hello', 'Ali'); // Output: 'Hello, Ali!'
greet('Hi', 'Hicran'); // Output: 'Hi, Hicran!'
*/

function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
}

greet('Hello', 'Malik')
greet('Hi', 'John')

/*
Write a function named as sum which takes 2 number arguments and return their sum

sum(3, 5)   -> 8
sum(4, 7)   -> 11
sum(-2, 3)   -> 1
*/

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}
console.log(sum(3, 5));


/*
Write a function named as a product which takes 3 numbers as arguments and return their product
*/
function product(n1, n2, n3) {
    let result = n1 * n2 * n3;
    return result;
}

console.log(product(2, 4, 5));
console.log(product(3, 7, 6));
console.log(product(5, 0, 9));

