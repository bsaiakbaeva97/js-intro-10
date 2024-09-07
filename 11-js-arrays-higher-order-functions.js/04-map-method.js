
// multiply each number by 3
const numbers = [ 3, 5, 8, 15];

const result3 = (numbers.map((num) => num * 3));

console.log(result3);

// find if number is odd or even
const nums = [ 5, 3, 2, 20];

const result4 = (nums.map((num) => num % 2 === 0 ? 'even' : 'odd'));

console.log(result4);

// each sentence's first word -> ['Good', 'I', 'It'];
const sentences = ['Good morning', 'I like arrays', 'It is Saturday'];

console.log(sentences.map((sentence) => sentence.split(' ')[0]));

// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]
const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];

console.log(salaries.map((salary) => salary.toFixed(2)));

