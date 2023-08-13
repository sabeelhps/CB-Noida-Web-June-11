// --------------------------Find area corresponding to each radius

const radii = [2, 3, 1, 4, 6, 7, 8];

function calculateArea(radii) {
    const res = [];
    for (let radius of radii) {
        res.push(Math.PI * radius * radius);
    }
    return res;
}

// console.log(calculateArea(radii));


// ---------------------------reverse words--------


const sentence = "The blue fox jumps over a white lazy dog";

// Expected ans = "dog lazy white a over jumps fox blue The";

function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}

// console.log(reverseWords(sentence));

// --------------------------counts digit------------

const num = 34125;

// Expected ans = 5

function countDigit(num) {
    let count = 0;
    while (num > 0) {
        count++;
        num = parseInt(num / 10);
    }
    return count;
}

// console.log("Number of digit : ", countDigit(num));


// ------------------------Count vowels----------

const str = "Hello Worldoo";

// Expected ans = 3

function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels.includes(char.toLowerCase())) {
            count++;
        }
    }
    return count;
}

// console.log(countVowels(str));

// -------------------------calculate square root

const numsArr = [49, 64, 81, 16, 50, 30];

// Expected ans = [ 7, 8, 9, 4, 7.0710678118654755, 5.477225575051661 ]

function squareRoot(numsArr) {
    let res = [];
    for (let num of numsArr) {
        res.push(Math.sqrt(num));
    }
    return res;
}

// console.log(squareRoot(numsArr));

// ------------------------frequency of each letter-------

const message = "Hello World";

// Expected ans - print frequency of each letter

function frequencyOfLetter(message) {
    // const freq = {};
    // for (let char of message) {
    //     if (freq[char]) {
    //         freq[char] = freq[char]+1;
    //     } else {
    //         freq[char] = 1;
    //     }
    // }
    // return freq;


    // Sol : 2----------------------
    const frequencyMap = new Map();
    for (let char of message) {
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char) + 1);
        } else {
            frequencyMap.set(char, 1);
        }
    }
    return frequencyMap;
}


// console.log(frequencyOfLetter(message));

// ------------------------Sum of number elements

const list = [1, 2, 3, "3476", 6, "43874", "2178832"];

// Expected ans = 12 

function sumOfNumElements(list) {
    let sum = 0;
    for (let el of list) {
        if (typeof el === 'number') {
            sum = sum + el;
        }
    }
    return sum;
}

// console.log(sumOfNumElements(list));

// ------------------------------sum of all even digit

const number = 376347;

// Expected ans = 10

function sumOfEvenDigit(number) {
    let sum = 0;
    while (number > 0) {
        const rem = number % 10;
        if (rem % 2 === 0) {
            sum += rem;
        }
        number = parseInt(number / 10);
    }
    return sum;
}

console.log(sumOfEvenDigit(number));



// ---------------------Capitalize the first letter of each word

const str1 = "The blue fox jumps over a white lazy dog";

// Expected ans = "The Blue Fox Jumps Over A White Lazy Dog";

function capitalizeFirstLetter(str1) {
    const words = str1.split(' ');
    const res = [];
    for (let word of words) {
        res.push(word.replace(word[0], word[0].toUpperCase()));
    }
    return res.join(" ");
}

// console.log(capitalizeFirstLetter(str1));

// ----------------------Remove repeated words from sentence--------------

const sentence1 = "I dont repeat mistakes i date mistakes mistakes date repeat";


// -----------------flattening the array----------


const myArr = [[1, 2], [3, 4, 5], ["Hello", true], [5, [true, false]], 99, 100];

// Expected result [1,2,3,4,5,"Hello",true,5,[true,false], 99, 100];

function flattenArray(myArr) {
    const res = [];
    for (let el of myArr) {
        if (Array.isArray(el)) {
            res.push(...el);
        } else {
            res.push(el);
        }
    }
    return res;
}

console.log(flattenArray(myArr));


