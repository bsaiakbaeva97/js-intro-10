const names = [ 'alex', 'Adam', 'Jane', 'John', 'alexander'];
const sortNames = names.sort();

console.log(names.sort()); // [ 'Adam', 'Jane', 'John', 'alex', 'alexander' ]
console.log(sortNames); // [ 'Adam', 'Jane', 'John', 'alex', 'alexander' ]

// It sorts the array elements alphabatically and according to ASCII. 
// It puts strings with capital letter first

const nums = [ 1, 40, 2, 3, 10, 100 ];

console.log(nums.sort((a, b) => a - b)); // [ 1, 2, 3, 10, 40, 100 ]
console.log(nums.sort((a, b) => b - a)); // [ 1, 2, 3, 10, 40, 100 ]

