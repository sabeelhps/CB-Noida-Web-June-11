
// // // Function definition

// // function sayHello() {
// //     // body of a function
// //     console.log('Hello from function');
// //     const sum = 1 + 2;
// //     console.log("Sum : ", sum);
// // }

// function sum(a,b) {
//     const res = a + b;
//     return res;
// }

// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// greet('Kartik');

// // ..
// // ..
// // ..
// // 1000 lines 


// greet('Varun');

// // const a = 10;
// // const b = 20;
// // const sum = a + b;

// console.log(sum(10, 20));


// // ..
// // ..
// // .
// // ..10000 lines

// // const a1 = 30;
// // const b1 = 40;

// // const sum1 = a1 + b1;
// console.log(sum(30, 40));


// // ..
// // ..
// // ...100000
// // const a2 = 30;
// // const b2 = 40;

// // const sum2 = a2 + b2;

// console.log(sum(30, 40));


// Simple Interest

function simpleInterest(principal, rate, time) {
    return principal * rate * time / 100;
}

const ans = simpleInterest(100, 10, 3);

console.log(ans);

// Factorial

function factorial(num) {
    let res = 1;
    while (num > 0) {
        res = res * num;
        num--; //decrement operator
    }
    return res;
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

console.log("nCr : ", nCr(3, 2));
console.log("nCr : ", nCr(5, 2));
console.log("nCr : ", nCr(6, 3));


// Function Expression

const cbRoot = function cubeRoot(num) {
    return Math.cbrt(num);
}

console.log("Cube Root", cbRoot(8));
console.log("Cube Root", cbRoot(27));
console.log("Cube Root", cbRoot(100));


// Arrow function

const multiply = (x, y)=> x * y;

console.log(multiply(5, 6));

const squareOfNum = num => num ** 2;

