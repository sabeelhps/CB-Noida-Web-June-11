const PI = 3.14205;
const LOG_2 = 1.41;

function cube(num) {
    if (typeof num !== 'number') {
        throw new Error('Argument is not a number');
    }
    return num ** 3;
}

function squareRoot(num) {
    if (typeof num !== 'number') {
        throw new Error('Argument is not a number');
    }
    return Math.sqrt(num);
}

// module.exports = {
//     PI,
//     LOG_2,
//     cube,
//     sqrt: squareRoot
// }

module.exports = cube;
