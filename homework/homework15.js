console.log ('\n---------------TASK01--------------/n');
/*
Requirement:
Write a function named toCamelCase() which takes a string as its argument and returns a new string in camelCase. Assume the string only contains letters and spaces

Examples:
toCamelCase("first name") 	->"firstName"
toCamelCase("last     name") 	->"lastName"
toCamelCase("   ZIP CODE") 	->"zipCode"
toCamelCase(“I Learn Java Script”)   	-> "iLearnJavaScript"
toCamelCase(“helloWorld”)   ​	-> “helloWorld”
*/

const toCamelCase = (str) => {
    let strArr = str.trim().toLowerCase().split(/\s+/);
    let result = [];

    for(let i = 0; i < strArr.length; i++){

        if(i === 0) result.push(strArr[i]);
        else result.push(strArr[i][0].toUpperCase() + strArr[i].slice(1));
    
    }
    return result.join('')
}

console.log(toCamelCase("first name"));
console.log(toCamelCase("last     name"));
console.log(toCamelCase("   ZIP CODE"));

console.log ('\n---------------TASK02--------------/n');
/*
Requirement:
Write a function named toSnakeCase() which takes a string as its argument and 
returns a new string in snake_case. Assume the string only contains letters and 
spaces
NOTE: In snake case words are separated by underscores (_) and are all lowercase.

Examples:
toSnakeCase("first name") 	->"first_name"
toSnakeCase("last    name") 	->"last_name"
toSnakeCase("    I love Java Script") 	->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")   		​-> "hello"
*/

const toSnakeCase = (str) => str.trim().toLowerCase().split(' ').join('_');

console.log(toSnakeCase("first name"));
console.log(toSnakeCase("last    name") );
console.log(toSnakeCase("    I love Java Script"));

console.log ('\n---------------TASK03--------------/n');
/*
Requirement:
Write a function named alternatingCases() which takes a 
string argument and returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters 
are ignored.

Examples:
alternatingCases("Hello") 	-> "HeLlO"
alternatingCases("basketball") 	-> "BaSkEtBaLl"
alternatingCases("Tech Global") 	-> "TeCh GlObAl"
alternatingCases("") 		-> ""
alternatingCases("123!@#aB") 	-> "123!@#Ab"
*/

const alternatingCases = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toUpperCase();
        } 
        else if(!(str[i] >= 'a' && str[i] <= 'z')){
            result += str[i];
        }
        else {
            result += str[i].toLowerCase();
        }
    }
        return result;
}

    

console.log(alternatingCases("Hello"));
console.log(alternatingCases("basketball") );
console.log(alternatingCases("Tech Global"));
console.log(alternatingCases("123!@#aB"));


console.log ('\n---------------TASK04--------------/n');
/*
Requirement:
Write a function named isNeutral() that takes two strings comprised 
of + and -, and return a new string which shows how the two strings 
interact in the following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral,
and are shown as the number 0.
Note: The two strings will be the same length.

Examples
isNeutral("-", "+")     		->  "0"
isNeutral("-+", "-+") 		->   "-+"
isNeutral("-++-", "-+-+")           	->  "-+00"
isNeutral("--++--", "++--++")     	->  "000000"
isNeutral("+++", "+++")          	 ->  "+++"
*/

const isNeutral = (str1, str2) => {
    
    let result = '';  

    for (let i = 0; i < str1.length; i++) {

        if (str1[i] === str2[i]) result += str1[i];  
        else result += '0'; 
          
     }
        return result;
 }

console.log(isNeutral("-", "+") );
console.log(isNeutral("-++-", "-+-+"));


console.log ('\n---------------TASK05--------------/n');
/*
Requirement:
Write a function named isTrueOrFalse() which takes a string with sets of character/words 
separated by space. Looking at the first letter of each word 
(case insensitive-"A" and "a" should be treated the same), 
you need to determine whether it falls into the positive/first 
half of the alphabet ("a"-"m") or the negative/second half ("n"-"z"). 
Return true if there are more (or equal) positive words than negative words, 
false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.

Examples
isTrueOrFalse("A big brown fox caught a bad rabbit") 	-> true
isTrueOrFalse("Xylophones can obtain Xenon.")   		->  false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK") 	-> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe") 	-> true
isTrueOrFalse("Got stuck in the Traffic") 		-> false

*/

const isTrueOrFalse = (str) => {
    
    const words = str.split(/\s+/);
    let positiveCount = 0;
    let negativeCount = 0;

    for (let word of words) {
       
        const firstLetter = word.trim().at(0).toLowerCase();
    
        if (/[a-z]/.test(firstLetter)) {

            if (firstLetter >= 'a' && firstLetter <= 'm') {
                positiveCount++;
            } else if (firstLetter >= 'n' && firstLetter <= 'z') {
                negativeCount++;
            };
        };
    };

    return positiveCount >= negativeCount;
};

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"));
console.log(isTrueOrFalse("Xylophones can obtain Xenon."));