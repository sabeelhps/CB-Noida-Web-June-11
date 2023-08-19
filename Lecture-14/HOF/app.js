

// function a(x, y) {
//     return z;
// }

// if x, y, or z are also functions then function a is a HOF . 


// function sayHello() {
//     console.log(`Hello World`);
// }

// function greet(func) {
//     func();
// }

// greet(sayHello);

// function fun() {
//     return function () {
//         console.log('inside anonymous function');
//     }
// }

// const f = fun();

// f();


const radii = [1, 2, 3, 4, 5, 6];

// area
// perimeter
// diameter

function calculateArea(radii) {
    const res = [];
    for (let r of radii) {
        res.push(Math.PI * r * r);
    }
    return res;
}

function calculatePerimeter(radii) {
    const res = [];
    for (let r of radii) {
        res.push(2* Math.PI * r);
    }
    return res;
}

function calculateDiameter(radii) {
    const res = [];
    for (let r of radii) {
        res.push(2* r);
    }
    return res;
}

console.log(calculateArea(radii));
console.log(calculatePerimeter(radii));
console.log(calculateDiameter(radii));

function calculate(radii, logic) {
    const res = [];
    for (let r of radii) {
        res.push(logic(r));
    }
    return res;
}

const area = r => Math.PI * r * r;
const perimeter = r => 2 * Math.PI * r;
const diameter = r => 2 * r;

console.log(calculate(radii, area));
console.log(calculate(radii, perimeter));
console.log(calculate(radii, diameter));