// synchronous code
console.log('1')
console.log('2')
console.log('3')

// get A in 2 seconds
setTimeout(() => {
    console.log('A')
}, 2000);


setTimeout(() => {
    console.log('B')
}, 1000);

setTimeout(() => {
    console.log('C')
}, 1500);

// OUTPUT:

// What we expect
