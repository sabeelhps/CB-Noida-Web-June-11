
// 25.874, 26.874
// 25.986, 25.987

// const num1 = 3427625.883;
// const num2 = 3427625.883;

// // check if integar parts are equal

// const firstNum = num1 * 1000;
// const secondNum = num2 * 1000;

// if (parseInt(firstNum)-parseInt(secondNum)===0) {
//     console.log('Numbers are equal');
// } else {
//     console.log('Not equal');
// }

// ------------------------------

// const sentence = "This fox jumps over a white lazy dog";
// console.log(sentence);
// const words = sentence.split(' ');
// words.reverse();
// const reversedSentence = words.join(' ');
// console.log(reversedSentence);

let n = 5;

for (let row = 1; row <= n; row++){
    let str = "";
    for (let col = 1; col <= row; col++){
        str += "* ";
    }
    console.log(str);
}

