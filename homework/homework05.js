console.log('\n---------------TASK-1-----------------\n');

function countPos(array) {
    let count = 0;
    array.forEach(num => {
        if (num > 0) {
            count++;
        }
    });
    return count;
}

console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));

console.log('\n---------------TASK-2-----------------\n');


function countA (string) {
    return string.split(' ').filter(x => x.toLowerCase().indexOf('a')).length; 
}

console.log(countA('TechGlobal is a QA bootcamp'));

console.log('\n---------------TASK-3-----------------\n');

function countVowel(string) {
    const vowels = 'aeiouAEIOU';
    return string.split('').filter(x => vowels.includes(x)).length;
}

console.log(countVowel('Hello'));

console.log('\n---------------TASK-4-----------------\n');

function countConsonants(string) {
    const vowels = 'aeiouAEIOU';
    return string.length - string.split('').filter(x => vowels.includes(x)).length;
}

console.log(countConsonants('Hello World'));

console.log('\n---------------TASK-6-----------------\n');

function factorial(number) {
   return number.reduce((acc, curr) => (acc * curr, 1));
} 

console.log(factorial(5));

console.log('\n---------------TASK-7-----------------\n');

function isPalindrome(string) {
   return string === string.split('').reverse().join('') ? true : false;
}

console.log(isPalindrome('ab   a'));


console.log('\n---------------TASK-8-----------------\n');

function countMultipleWords(arr) {
    let hasMultipleStr = str => {
        const words = str.trim().split(' ');
        return words.length > 1;
    };

    return arr.filter(hasMultipleStr).length;
}

console.log(countMultipleWords([ "foo", "", "    ", "foo", "     foo" ]))