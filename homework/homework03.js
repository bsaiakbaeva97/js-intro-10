const { getRandomNumber } = require('../utils/MathHelper.js');

console.log('\n---------------TASK-1-----------------\n');

let random1 = getRandomNumber(1, 100);
let random2 = getRandomNumber(1, 100);
let random3 = getRandomNumber(1, 100);

console.log(random1);
console.log(random2);
console.log(random3);

console.log((random1 + random2 + random3) / 3 >= 50); // if the output is boolean put your code in console.log();

// if((random1 + random2 + random3) / 3 >= 50) console.log('true');
// else console.log('false')


console.log('\n---------------TASK-2-----------------\n');

let ranNum1 = getRandomNumber(1, 3);
let ranNum2 = getRandomNumber(1, 3);
let ranNum3 = getRandomNumber(1, 3);

console.log(ranNum1);
console.log(ranNum2);
console.log(ranNum3);

if(ranNum1 === ranNum2 && ranNum2 === ranNum3 && ranNum1 === ranNum3) console.log('TRIPLE MATCH');
else if(ranNum1 !== ranNum2 && ranNum2 !== ranNum3 && ranNum1 !== ranNum3) console.log('NO MATCH');
else console.log('DOUBLE MATCH');


console.log('\n---------------TASK-3-----------------\n');

function hasA(str) {
    if(str.includes('A') || str.includes('a')) return 'true';
    return 'false';
}

console.log(hasA('apple'));


console.log('\n---------------TASK-4-----------------\n');

function doubleOrTripleWord(string) {
    if(string.length % 2 === 0){
    return string + string + string;
    }
    return string + string;
}
console.log(doubleOrTripleWord('Tec'));


console.log('\n---------------TASK-5-----------------\n');

function firstWord(str) {
    return str.slice(0, str.indexOf(' '));
}

console.log(firstWord('like Java'));


console.log('\n---------------TASK-6-----------------\n');

function lastWord(str) {
    return str.split(' ').at(-1);
}

console.log(lastWord('Hello World'));


console.log('\n---------------TASK-7-----------------\n');

function firstlastWord(str) {
   let split = str.split(' ')
   return split[0] + split.at(-1)
}

console.log(firstlastWord('I like JavaScript'));

console.log('\n---------------TASK-8-----------------\n');

function startVowel(str) {
    // let firstLetter = str[0].toUpperCase();
    // if (firstLetter === 'A' || firstLetter === 'E'|| firstLetter === 'I' || firstLetter === 'O' || firstLetter === 'U') {
    //  return 'true';
    // } 
    // return 'false';
    return 'aeiouAEIOU'.includes(str[0])
}

console.log(startVowel('123'));

console.log('\n---------------TASK-9-----------------\n');

function swap4(str) {
   let first4 = str.slice(0, 4);
   let last4 = str.slice(-4);
   let mid = str.slice(4, - 4);

   if (str.length >= 8) {
    return last4 + mid + first4;
   }
    return '';
}

console.log(swap4('JavaScript'));


console.log('\n---------------TASK-10-----------------\n');

function swapFirstLastWord(str) {
    let firstWord = str.slice(0, str.indexOf(' '))
    let lastWord = str.slice(' ').at(-1)
    let midWord = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
    let result = lastWord + midWord + firstWord;
    
    if(str.length >= 2) return result;
    return '';
}

console.log(swapFirstLastWord('...like JavaScript...'));