

// function delay(func, n) {
//     const startEpoch = new Date().getTime();
//     let currentEpoch = startEpoch;
//     while (currentEpoch <= startEpoch + 1000 * n) {
//         currentEpoch = new Date().getTime();
//     }
//     func();
// }

// console.log('START');

// function fun() {
//     console.log('inside fun');
// }

// // setTimeout(fun, 10000);
// const id = setInterval(fun, 1000);

// setTimeout(() => {
//     clearInterval(id);
// }, 10000);

// console.log('END');

// ==========================

console.log('START');

function callback() {
    console.log('Inside callback');
}

setTimeout(callback, 1000);

console.log('END');

// while (true) {
//     console.log('Inside while loop');
// }