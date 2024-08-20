let str = 'TechGlobal';

// 1. get a substring at the beginning or in the middle - Tech or Glo

str.substring(0, 4); // 0 included but 4 is not included. 

console.log(str.substring(0, 4));

console.log(str.substring(4, 7));
console.log(str.slice(4, 7));

// 2. get a substring starting from any index and going all the way till the end - Global or bal

console.log(str.substring(4));
console.log(str.slice(4));

console.log(str.substring(7));
console.log(str.slice(7));

// Difference
let lan = 'JavaScript';

// Get the last 3 characters
console.log(lan.substring(lan.length - 3));
console.log(lan.slice(-3));

// Get 'Sc'
lan.slice(4,6);
lan.slice(-6, -4);

//substring() vs slice()
let str1 = 'Hello'

console.log(str1.substring(3, 1)); // el
console.log(str1.slice(3, 1)); // ''

let str2 = 'Morning';
console.log(str2.substring(-5, -3)); // ''
console.log(str2.slice(-5, -3)); // rn

/*
slice()
TASK: retrieve substring from another string based on the given indexes
RETURN: returns a new substring 
ARGUMENTS: takes 1 or 2  index arguments, first one is the starting index (included),
 and the second is the ending index (excluded)
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static
 */

/*
substring()
TASK: retrieve substring from another string based on the given indexes
RETURN: returns a new substring 
ARGUMENTS: takes 1 or 2 index arguments, first one is the starting index (included), second is the ending index (excluded)
    NOTE: it will not work with negative indexes and converts them to zeros.
    NOTE: if the left index is greater than the right index, it modifies to correct way and give you a meaningful substring.
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static
*/