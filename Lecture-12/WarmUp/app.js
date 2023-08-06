
// 25.874, 26.874
// 25.986, 25.987

const num1 = 3427625.883;
const num2 = 3427625.883;

// check if integar parts are equal

const firstNum = num1 * 1000;
const secondNum = num2 * 1000;

if (parseInt(firstNum)-parseInt(secondNum)===0) {
    console.log('Numbers are equal');
} else {
    console.log('Not equal');
}