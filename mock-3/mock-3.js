console.log("\n---------------TASK01--------------/n");
/*
Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and returns a new
string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") -> ""
replaceFirstLast("Hello") -> "oellH"
replaceFirstLast("Tech Global") -> "lech GlobaT"
replaceFirstLast("A") -> ""
replaceFirstLast(" A ") -> ""
*/

const replaceFirstLast = (str) => {
  const strTrimmed = str.trim().split(/\s+/).join(" ");
  const firstChar = strTrimmed.at(0);
  const lastChar = strTrimmed.at(-1);
  const middleChar = strTrimmed.slice(1, -1);

  return str.length >= 2 ? lastChar + middleChar + firstChar : "";
};
console.log(replaceFirstLast("Hello    World "));

console.log("\n---------------TASK02--------------/n");
/*
First and Last Word
Write a function named as firstlastWord() which takes a string word as an argument and
returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
Examples:
firstLastWord("Hello World") -> "HelloWorld"
firstLastWord("I like JavaScript") -> "IJavaScript”
firstLastWord("Hello") -> "HelloHello"
firstLastWord("") -> ""
firstLastWord("
*/

const firstLastWord = (str) => {
  const strTrimmedArr = str.trim().split(/\s+/);
  const first = strTrimmedArr[0];
  const last = strTrimmedArr.at(-1);

  return str !== "" ? first + last : "";
};

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like      JavaScript    "));

console.log("\n---------------TASK03--------------/n");
/*
Factorial
Write a function named as factorial() which takes a number as an argument and returns the
factorial of the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5) -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/

const factorial = (num) => {
  let count = 1;
  for (let i = 2; i <= num; i++) {
    count *= i;
  }

  return count;
};

console.log(factorial(0));

console.log("\n---------------TASK04--------------/n");
/*
Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument
and returns the string back with all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello") -> "Hello"
removeExtraSpaces(" Hello World ") -> "Hello World"
removeExtraSpaces(" JavaScript is fun") -> "JavaScript is fun”
removeExtraSpaces("") -> ""
*/

const removeExtraSpaces = (str) => str.trim().split(/\s+/).join(" ");

console.log(removeExtraSpaces("   Hello    World  "));

console.log("\n---------------TASK05--------------/n");

/*
First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates
in the array. For two elements to be considered as duplicated, value and data types of the
elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) -> -1
*/

const firstDuplicate = (arr) => {
  const container = [];
  const duplicate = [];

  for (const ele of arr) {
    !container.includes(ele) ? container.push(ele) : duplicate.push(ele);
  }

  return duplicate.length === 0 ? -1 : duplicate[0];
};

console.log(firstDuplicate([5, 5, 5, "5", 3, 3, 7, 4]));
console.log(firstDuplicate(""));

console.log("\n---------------TASK06--------------/n");
/*
Find All Duplicate Elements
Write a function named as getDuplicates() which takes an array argument and returns all the
duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no
duplicates in the array. For two elements to be considered as duplicated, value and data types
of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ ]
*/

const getDuplicates = (arr) => {
  const notDuplicates = [];
  const duplicates = [];

  for (const ele of arr) {
    if (notDuplicates.includes(ele) && !duplicates.includes(ele)) {
      duplicates.push(ele);
    } else {
      notDuplicates.push(ele);
    }
  }

  return duplicates;
};

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));

console.log("\n---------------TASK07--------------/n");
/*
Reverse String Words
Write a function named as reverseStringWords() which takes a string as an argument and
returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces
before and after words in the given string.
Examples:
reverseStringWords("Hello World") -> "olleH dlroW"
reverseStringWords("I like JavaScript") -> "I ekil tpircSavaJ"
reverseStringWords("Hello") -> "olleH"
reverseStringWords("") -> ""
reverseStringWords(" ") -> ""
*/

const reverseStringWords = (str) =>
  str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

console.log(reverseStringWords("Hello World"));

console.log("\n---------------TASK08--------------/n");
/*
Add Two Arrays
Write a function named add() which takes two array of numbers as argument and returns a new
array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]) -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
add([-5, 6, -3, 11], [5, -6, 3, -11]) -> [0, 0, 0, 0]
*/

const add = (arr1, arr2) => {
  const result = [];
  const maxLengthArr = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLengthArr; i++) {
    const num1 = arr1[i] || 0;
    const num2 = arr2[i] || 0;
    result.push(num1 + num2);
  }
  return result;
};

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));

console.log("\n---------------TASK09--------------/n");

/*
Fizz Buzz
Write a function named fizzBuzz() which takes a number argument and returns an array
consisting of numbers starting from 1 to given number. However, it will return "Fizz" for the
numbers divided by 3, "Buzz" for the numbers divided by 5, and "FizzBuzz" for the numbers
divided both by 3 and 5.
Examples:
fizzBuzz(3) -> [ 1, 2, 'Fizz' ]
fizzBuzz(5) -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz(10) -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ]
fizzBuzz(15) -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz'. 13, 14, 'FizzBuzz' ]
fizzBuzz(2) -> [ 1, 2 ]
*/

const fizzBuzz = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
};

console.log(fizzBuzz(15));

console.log("\n---------------TASK10--------------/n");

/*
Palindrome
Write a function named as isPalindrome() which takes a string word as an argument and
returns true if the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello") -> false
isPalindrome("Kayak") -> true
isPalindrome("civic") -> true
isPalindrome("abba") -> true
isPalindrome("ab a") -> false
isPalindrome("123454321") -> true
isPalindrome("A") -> true
isPalindrome("") -> true
*/

const isPalindrome = (str) => {
  let strToLowerCase = str.toLowerCase();
  let strReversed = str.toLowerCase().split("").reverse().join("");

  return strToLowerCase === strReversed;
};

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));

console.log("\n---------------TASK11--------------/n");

/*
Remove Duplicates
Write a function named removeDuplicates() which takes an array argument and returns a new
array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) -> ["1", "2", "3"]
*/

const removeDuplicates = (arr) => {
  const duplicates = [];
  const result = [];

  for (const ele of arr) {
    !result.includes(ele) ? result.push(ele) : duplicates.push(ele);
  }

  return result;
};

const removeDuplicates2 = (arr) => {
  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
};

console.log(removeDuplicates2([10, 20, 35, 20, 35, 60, 70, 60]));

console.log("\n---------------TASK12--------------/n");

/*
Prime Number
Write a function named as isPrime() which takes a number as an argument and returns true if
the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even
prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
Examples:
isPrime(5) -> true
isPrime(2) -> true
isPrime(29) -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/

const isPrime = (num) => {
  if (num === 2) return true;
  if (num < 2) return false;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (i = 5; i < num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(isPrime(21));

console.log("\n---------------TASK13--------------/n");
/*
Array Factorial
Write a function named arrFactorial() which takes an array of numbers as argument and return
the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) -> [1, 2, 6, 24]
arrFactorial([0, 5]) -> [1,120]
arrFactorial([5 , 0, 6]) -> [120, 1, 720]
arrFactorial([]) -> []
*/

const arrFactorial = (arr) => {
  return arr.map((num) => {
    let count = 1;
    for (let i = 2; i <= num; i++) {
      count *= i;
    }
    return count;
  });
};

console.log(arrFactorial([5, 0, 6]));

console.log("\n---------------TASK14--------------/n");

/*
Find Biggest Number
Write a function named findBiggestNumber() which takes a string argument and returns the
biggest number appears in the string.
Examples:
findBiggestNumber("abc$") -> 0
findBiggestNumber("a1b4c 6#") -> 6
findBiggestNumber("ab110c045d") -> 110
findBiggestNumber("525") -> 525
findBiggestNumber("3 for 10 dollars") -> 10
*/

const findBiggestNumber = (str) => {
  const max = [];
  const strNum = str.split(/\D+/);

  for (const num of strNum) {
    if (num === "") max.push(0);
    else max.push(Number(num));
  }

  return Math.max(...max);
};
console.log(findBiggestNumber("a1b4c 6#"));

// const findBiggestNumber2 = (str) =>
//   str
//     .split(/\D+/)
//     .reduce(
//       (greatest, numStr) =>
//         Number(numStr) > greatest ? Number(numStr) : greatest,
//       0
//     );

console.log("\n---------------TASK15--------------/n");
/*
Find Sum Numbers
Write a function named findSumNumbers() which takes a string argument and returns sum of
the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c 6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
*/

const findSumNumbers = (str) =>
  str
    .split(/\D+/)
    .reduce((acc, numStr) => (numStr ? (acc += Number(numStr)) : acc), 0);

console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c  6#"));
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("525"));
console.log(findSumNumbers("3 for 10 dollars"));

console.log("\n---------------TASK16--------------/n");
/*
Is Power Of 3
Write a function named isPowerOf3() which takes a number argument and returns true if given
number is equal to 3 power of the X. Otherwise, return false.
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1) -> true
isPowerOf3(2) -> false
isPowerOf3(3) -> true
isPowerOf3(27) -> true
isPowerOf3(100) -> false
isPowerOf3(81) -> true
isPowerOf3(9) -> true
*/

function isPowerOf3(num) {
  while (num % 3 === 0) {
    num /= 3;
  }

  return num === 1;
}

console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));

console.log("\n---------------TASK17--------------/n");
/*
Fibonacci Series 1
Write a function named fibonacciSeries1() which takes a number n argument and returns the
n series of Fibonacci numbers as an array.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3) -> [0, 1, 1]
fibonacciSeries1(5) -> [0, 1, 1, 2, 3]
fibonacciSeries1(7) -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8) -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1) -> [0]
fibonacciSeries1(2) -> [0, 1]
*/
function fibonacciSeries1(num) {
  const result = [0, 1];
  if (num === 0) return [0];
  if (num === 1) return [0, 1];

  for (let i = 2; i < num; i++) {
    let nextNum = result[i - 1] + result[i - 2];
    result.push(nextNum);
  }

  return result;
}

console.log(fibonacciSeries1(5));

console.log("\n---------------TASK18--------------/n");
/*
Fibonacci Series 2
Write a function named fibonacciSeries2() which takes a number n argument and returns the
nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2) -> 1
fibonacciSeries2(4) -> 2
fibonacciSeries2(8) -> 13
fibonacciSeries2(9) -> 21
fibonacciSeries2(1) -> 0
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

console.log("\n---------------TASK19--------------/n");
/*
Find Uniques
Write a function named findUniques() which takes two array of number arguments and returns
the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.
NOTE: If one of the array is empty, then return unique values from the other array.
Examples:
findUniques([], []) -> []
findUniques([], [1, 2, 3, 2]) -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5]) -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9]) -> []
findUniques([-1, -2], [1, 2]) -> [-1, -2, 1, 2]
*/

const findUniques = (arr1, arr2) => {
  const concatArr = arr1.concat(arr2);
  const filteredArr = concatArr.filter(
    (ele) => !(arr1.includes(ele) && arr2.includes(ele))
  );
  const set = new Set(filteredArr);

  return [...set];
};
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));

// function findUniques (arr1, arr2) {
//   const unique = []

//   arr1.forEach((ele) => {
//       if(!arr2.includes(ele)&& !unique.includes(ele)) unique.push(ele);
//   })

//   arr2.forEach((ele) => {
//       if(!arr1.includes(ele) && !unique.includes(ele)) unique.push(ele);
//   })

//   return unique;
// }

console.log("\n---------------TASK20--------------/n");
/*
Reverse Number
Write a function named reverseNumber() which takes a number argument and returns it back
reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples:
reverseNumber(371) -> 173
reverseNumber(123) -> 321
reverseNumber(12) -> 21
reverseNumber(0) -> 0
reverseNumber(111) -> 111
*/

const reverseNumber = (num) => {
  let result = 0;
  while (num > 0) {
    let digit = num % 10;
    result = result * 10 + digit;
    num = Math.floor(num / 10);
  }

  return result;
};

console.log(reverseNumber(371));

console.log("\n---------------TASK21--------------/n");

/*
Is Armstrong
Write a function named isArmstrong() which takes a number argument and returns true if
given number is armstrong, return false otherwise.
NOTE: An armstrong number is a number that is equal to the sum of its own digits raised to the
power of the number of digits. In other words, an n-digit number is an Armstrong number if the
sum of its digits, each raised to the nth power, is equal to the number itself.
• Let's take an example to understand it better. Consider the number 153.
• To determine if 153 is an armstrong number, we need to check if the sum of its
digits, each raised to the power of the number of digits, equals the original
number.
• 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
• In this case, the sum of the individual digits raised to the power of 3 (the number
of digits in 153) is equal to the original number, which means 153 is an armstrong
number.
Examples:
isArmstrong(153) -> true
isArmstrong(123) -> false
isArmstrong(1634) -> true
isArmstrong(153) -> true
isArmstrong(1111) -> false
*/

const isArmstrong = (num) => {
  const arrNum = num.toString().split("");
  let total = 0;

  for (const num of arrNum) {
    let power = Math.pow(num, arrNum.length);
    total += power;
  }

  return total === num;
};

console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(1111));

console.log("\n---------------TASK23--------------/n");
/*
Is Anagram
Write a function named isAnagram() which takes two string arguments and returns true if the
given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or
phrase. In the context of strings, checking if two strings are anagrams of each other means
verifying if they contain the same characters in the same quantities, regardless of the order of
those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
isAnagram("Apple", "Peach") -> false
isAnagram("listen", "silent") -> true
isAnagram("astronomer", "moon starer") -> true
isAnagram("CINEMA", "iceman") -> true
isAnagram("123", "1234") - > false
*/

const isAnagram = (str1, str2) => {
  const sortedStr1 = str1
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .sort()
    .join("");
  const sortedStr2 = str2
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .sort()
    .join("");

  return sortedStr1 === sortedStr2;
};

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("astronomer", "moon starer"));

console.log("\n---------------TASK24--------------/n");
/*
Count Palindrome
Write a function named countPalindrome() which takes a string and returns the number
of palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. Example:
level, radar, deed, refer.
Examples:
countPalindrome("Mom and Dad") -> 2
countPalindrome("See you at noon") -> 1
countPalindrome("Kayak races attracts racecar drivers") -> 2
countPalindrome("") -> 0
countPalindrome("No palindrome here") -> 0
*/

const countPalindrome = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .filter((word) => word.split("").reverse().join("") === word).length;
};

console.log(countPalindrome("Mom and Dad"));

console.log("\n---------------TASK25--------------/n");
/*
Can Form String
Write a function named canFormString() which takes two string arguments and returns true if
the second string can be formed by rearranging the characters of first string. Return false
otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
canFormString("Hello", "Hi") -> false
canFormString("programming", "gaming") -> true
canFormString("halogen", "hello") -> false
canFormString("CONVERSATION", "voices rant on") -> true
canFormString("12", "123") -> false
*/

const canFormString = (str1, str2) => {
  let arr1 = str1.toLowerCase().split("");
  let arr2 = str2.toLowerCase().replaceAll(" ", "").split("");

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) arr1.splice(arr1.indexOf(arr2[i]), 1);
    else return false;
  }
  return true;
};

console.log(canFormString("programmin", "g   aming"));

console.log("\n---------------TASK25--------------/n");
/*
Count Occurrence
Write a function named countOccurrence() which takes two string arguments and returns how
many times that the first string can form the second string.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
countOccurrence("Javascript", "Java") -> 1
countOccurrence("Hello", "World") -> 0
countOccurrence("Can I can a can", "anc") -> 3
countOccurrence("Hello", "l") -> 2
countOccurrence("IT conversations", "IT") -> 2
*/

const countOccurrence = (str1, str2) => {
  const arrOccurances = [];

  for (const char2 of str2.toLowerCase()) {
    arrOccurances.push(
      str1
        .toLowerCase()
        .split("")
        .filter((char1) => char1 === char2).length
    );
  }

  return arrOccurances.sort()[0];
};

console.log(countOccurrence("Can I can a can", "anc"));
