let items = 'Apples, Oranges, Bananas, Eggs, Milk'
console.log(items.split(', ')); // start splitting before coma and after space. 

let num = '10 | 20 | 30 | 40 |50'
console.log(num.split(' |')); // [ '10', ' 20', ' 30', ' 40', '50' ]

let str = 'Me and you will be successfull'
console.log(str.split(' '));  // [ 'Me', 'and', 'you', 'will', 'be', 'successfull' ]
console.log(str.split(' ').length); // 6

let smth = 'Hello'
console.log(smth.split('')); // [ 'H', 'e', 'l', 'l', 'o' ]

/*
split()
TASK: used to split the string into array elements with the given seperator
RETURN: returns an array if elements
ARGUMENTS: takes a string as an argument as a seperator
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static
 */