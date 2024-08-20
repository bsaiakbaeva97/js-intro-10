// if - else if - else if - else

const{ getRandomNumber } = require('../utils/MathHelper.js')

let number = getRandomNumber(1, 4);
 console.log ('Random number is =', number);

 if(number === 1) {
    console.log('ONE');
 }
 else if(number === 2) {
    console.log('TWO');
 }
 else if(number === 3) {
    console.log('THREE');
 }
 else if(number === 4) {
    console.log('FOUR')
 }
 else {
    throw Error('The method created a number')
 }