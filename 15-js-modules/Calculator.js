
const sum = (num1, num2) => num1 + num2;

const product = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;

const power = (num1, num2) => num1 ** num2;

// Enhanced Object Literals
const Calculator = {
    sum,
    product,
    division,
    power
};

module.exports.Calculator = Calculator;