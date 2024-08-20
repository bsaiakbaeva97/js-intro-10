console.log('Hello World');

// I like 'Apple' very much!

console.log("I like 'Apple' very much!");
console.log('I like \'Apple\' very much!');


// I want to learn "JavaScript" asap!
console.log('I want to learn "JavaScript" asap!');
console.log("I want to learn \"JavaScript\" asap!");


// The path of the file is techglobal\\Desktop\\hello.js
console.log('The path of the file is techglobal\\\\Desktop\\\\hello.js');

// 
console.log('Hello,\n\n\tI writing this letter for ...\nWell, first of all');


// ES6 Template Literals (2015) - backticks
console.log(`I want to learn "JavaScript" 
and 'TypeScript' asap!`);

console.log(`You
    can
    do
it`);

function middle(str) {
    if(str.length % 2 !== 0) return str[(str.length -1) / 2];
    else if(str.length % 2 === 0) return str[(str.length / 2) - 1] + str[str.length / 2];
    return str;
  }

  console.log(middle('Bermet'));