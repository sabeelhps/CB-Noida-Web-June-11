// const num1 = 1634;
// let n = num1;
// const digits = num1.toString().length;
// let num2 = 0;

// while (n > 0) {
//     const rem = n % 10;
//     num2 = num2 + rem ** digits;
//     n = parseInt(n / 10);
// }

// if (num1 == num2) {
//     console.log('Armstrong number');
// } else {
//     console.log('Not a armstrong number');
// }

const sentance = "This fox jumps over a white lazy dog";
const words = sentance.split(' ');
const res = [];

for (let word of words) {
    const reversedWord = word.split("").reverse().join("");
    res.push(reversedWord);
}

console.log(res.join(" "));
