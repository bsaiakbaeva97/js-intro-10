const favMovies = [ 'Harry Potter', 'Godfather', 'Lord of the Rings' ];

let [ myfav1, ,myfav3] = favMovies;

console.log(favMovies);
console.log(myfav1,myfav3);

const numbers = [ -3, 10, 0, 100, 200 ];
// ten, zero, twoHundred

let [ ,ten, zero, ,twoHundred ] = numbers

console.log(ten);
console.log(zero);
console.log(twoHundred);