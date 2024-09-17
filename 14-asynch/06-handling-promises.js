const { Program } = require('../utils/program.js');

// USING then() and catch()

function test1() {
    Program.goToAmazon()
    .then(() => Program.select())
    .then(() => Program.addToCart())
    .then(() => Program.checkout())
    .catch((err) => console.log(err));
}

test1();


async function test2() {
    try {
        await Program.goToAmazon();
        await Program.select();
        await Program.addToCart();
        await Program.checkout();
    }
    catch(err) {
        console.log(err);
    }
}   

test2();