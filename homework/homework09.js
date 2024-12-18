console.log("\n---------------TASK01--------------/n");

/*Requirement:
Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself. 
Examples:
fizzBuzz1(0)  -> "FizzBuzz"
fizzBuzz1(1)  -> 1
fizzBuzz1(3)  -> "Fizz"
fizzBuzz1(5)  -> "Buzz"
fizzBuzz1(30)  -> "FizzBuzz"
fizzBuzz1(10)  -> "Buzz"
fizzBuzz1(15)  -> "FizzBuzz"
fizzBuzz1(-15)  -> "FizzBuzz
*/

function fizzBuzz1(num) {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  else if (num % 3 === 0) return "Fizz";
  else if (num % 5 === 0) return "Buzz";
  else return num;
}

console.log(fizzBuzz1(1));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(-15));

console.log("\n---------------TASK02--------------/n");

/*Requirement:
Requirement:
Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided 
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
fizzBuzz2(3)  -> [ 1, 2, 'Fizz' ]
fizzBuzz2(5)  -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz' ] 
fizzBuzz2(15)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz', 11, 'Fizz'. 
13, 14,  'FizzBuzz' ] 
fizzBuzz2(2)  -> [ 1, 2 ]
*/

function fizzbuzz2(num) {
  const container = [];
  for (i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) container.push("FizzBuzz");
    else if (i % 3 === 0) container.push("Fizz");
    else if (i % 5 === 0) container.push("Buzz");
    else container.push(i);
  }
  return container;
}

console.log(fizzbuzz2(0));

console.log("\n---------------TASK03--------------/n");

/*Requirement:
Requirement:
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
*/

function findSumNumbers(str) {
  const nums = str.split(/[^0-9]+/);
  return nums.reduce((acc, num) => acc + (num === "" ? 0 : Number(num)), 0);
}
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("a1b4c  6#"));
console.log(findSumNumbers("525"));

console.log("\n---------------TASK04--------------/n");
/*Requirement:
Requirement:
Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number appears in the string.
Examples:
findBiggestNumber("abc$")  -> 0
findBiggestNumber("a1b4c  6#")  -> 6
findBiggestNumber("ab110c045d")  -> 110
findBiggestNumber("525")  -> 525
findBiggestNumber("3 for 10 dollars")  -> 10
*/

function findBiggestNumber(str) {
  const nums = str.split(/[^0-9]+/);
  const max = [];
  for (const num of nums) {
    if (num === "") max.push(0);
    else max.push(Number(num));
  }

  return Math.max(...max);
}
console.log(findBiggestNumber("abcd"));

console.log("\n---------------TASK05--------------/n");
/*Requirement:
Requirement:
Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive.
Examples:
countOccurrencesOfCharacters("")  -> ""
countOccurrencesOfCharacters("abc")  -> "1a1b1c"
countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa")  -> "2a2A1a”
countOccurrencesOfCharacters("www" ) -> "3w"
*/

function countOccurrencesOfCharacters(str) {
  const charCount = {};
  const result = [];
  if (str === "") return "";

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str) {
    if (charCount[char] > 0) {
      result.push(charCount[char] + char);
      charCount[char] = 0;
    }
  }

  return result.join("");
}

console.log(countOccurrencesOfCharacters("abc"));

// Other way
const countOccurrencesOfCharacters1 = (str) => {
  if (str === "") return "";

  let result = "";
  let currChar = str[0];
  let currCount = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currChar) currCount++;
    else {
      result += currCount + currChar;
      currCount = 1;
      currChar = str[i];
    }
  }

  result += currCount + currChar;
  return result;
};

console.log("\n---------------TASK06--------------/n");
/*Requirement:
Requirement:
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3)  -> [0, 1, 1]
fibonacciSeries1(5)  -> [0, 1, 1, 2, 3]
fibonacciSeries1(7)  -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8)  -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1)  -> [0]
fibonacciSeries1(2)  -> [0, 1]
*/

function fibonacciSeries1(num) {
  const result = [0, 1];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  for (i = 2; i < num; i++) {
    const nextNum = result[i - 1] + result[i - 2];
    result.push(nextNum);
  }
  return result;
}

console.log(fibonacciSeries1(5));

console.log("\n---------------TASK07--------------/n");
/*Requirement:
Requirement:
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2)  -> 1
fibonacciSeries2(4)  -> 2
fibonacciSeries2(8)  -> 13
fibonacciSeries2(9)  -> 21
fibonacciSeries2(1)  -> 0
*/
function fibonacciSeries2(num) {
  const result = [0, 1];
  if (num === 1) return 0;
  if (num === 2) return 1;

  for (i = 2; i < num; i++) {
    const nextNum = result[i - 1] + result[i - 2];
    result.push(nextNum);
  }
  return result[result.length - 1];
}

console.log(fibonacciSeries2(5));

console.log(fibonacciSeries2(2));

// Recursion
const fibonacciSeries2Rec = (num) => {
  return num === 1
    ? 0
    : num === 2 || num === 3
    ? 1
    : fibonacciSeries2(num - 1) + fibonacciSeries2(num - 2);
};

console.log("\n---------------TASK08--------------/n");
/*Requirement:
Requirement:
Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array.
Examples:
findUniques([], [])  -> []
findUniques([], [1, 2, 3, 2])  -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5])  -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9])  -> []
findUniques([-1, -2], [1, 2])  -> [-1, -2, 1, 2]
*/

function findUniques(arr1, arr2) {
  const unique = [];

  arr1.forEach((ele) => {
    if (!arr2.includes(ele) && !unique.includes(ele)) unique.push(ele);
  });

  arr2.forEach((ele) => {
    if (!arr1.includes(ele) && !unique.includes(ele)) unique.push(ele);
  });

  return unique;
}

console.log(findUniques([], [1, 2, 3, 3]));
console.log(findUniques([1, 2, 3, 3], []));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2]));

// With set

const findUniques = (arr1, arr2) => {
  const concatArr = arr1.concat(arr2);
  const filteredArr = concatArr.filter(
    (ele) => !(arr1.includes(ele) && arr2.includes(ele))
  );
  const set = new Set(filteredArr);

  return [...set];
};
console.log("\n---------------TASK09--------------/n");
/*Requirement:
Requirement:
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1)  -> true
isPowerOf3(2)  -> false
isPowerOf3(3)  -> true
isPowerOf3(27)  -> true
isPowerOf3(100)  -> false
isPowerOf3(81)  -> true
isPowerOf3(9)  -> true
*/

// While loop
function isPowerOf3(num) {
  while (num % 3 === 0) {
    num /= 3;
  }

  return num === 1;
}

// For loop
const isPowerOf3 = (num) => {
  for (let i = num; i >= 1; i /= 3) {
    if (i === 1) return true;
  }
  return false;
};

//Recursion
const isPowerOf3 = (num) =>
  num === 1 ? true : num % 3 !== 0 ? false : isPowerOf3(num / 3);

console.log(isPowerOf3(243));
