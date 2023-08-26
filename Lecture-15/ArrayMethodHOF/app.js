// const nums = [1, 2, 3, 4, 5, 6];

// function square(num) {
//     return num ** 2;
// }

// const squareRoot = num => Math.sqrt(num);

// const squareOfNums = nums.map(square);
// const squareRootNums = nums.map(squareRoot);

// console.log(squareOfNums);
// console.log(squareRootNums);

// const arr = [['name', 'abc'], ['age', 23], ['favColor', 'blue']];

// const ans = [{ name: 'abc' }, { age: 23 }, { favColor: 'blue' }];

// const res = arr.map((el) => {
//     return { [el[0]]: el[1] };
// })

// console.log(res);


// ----------------------------filter ----------------

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isEven(num) {
//     return num % 2 === 0;
// }

// const evenNums = nums.filter(isEven);

// console.log(evenNums);


// --------------------------------------------------

const menu = [
    {
        name: 'Chicken Tikka',
        price: 100
    },
    {
        name: 'Kadhai Paneer',
        price: 200
    },
    {
        name: 'Dal Makhni',
        price: 300
    },
    {
        name: 'Garlic Bread',
        price: 400
    },
    {
        name: 'Egg Curry',
        price: 500
    },
    {
        name: 'Onion Parantha',
        price: 20
    },
    {
        name: 'Chicken Biryani',
        price: 100
    }
];


// function isVeg(food) {
//     if (food.name.toLowerCase().includes('egg') || food.name.toLowerCase().includes('chicken')) {
//         return false;
//     }
//     return true;
// }

// function isOnionGarlicFree(food) {
//     if (food.name.toLowerCase().includes('onion') || food.name.toLowerCase().includes('garlic')) {
//         return false;
//     }
//     return true;
// }


// const vegMenu = menu.filter(isVeg);

// const jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);

// console.log(menu);
// console.log(vegMenu);
// console.log(jainMenu);

// --------------------------reduce ---------------------

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = nums.reduce((sum, val) => {
//     return sum + val;
// }, 0);

// console.log(sum);

// function callback(sum, food) {
//     return sum + food.price;
// }

// const totalAmount = menu.reduce(callback, 0);

// console.log(totalAmount);

// const arr1 = [[1, 2, 3], [4, 5], [6, 7, 8]];

// // [1,2,3,4,5,6,7,8]

// const res1 = arr1.reduce((accumulator, val) => {
//     return accumulator.concat(val);
// }, [])

// console.log(res1);


// Find minimum and maximum number from an array of numbers


// ------------------------------sort----------

// const nums = [10, 2, 3, 1, 4, 8, 9, 9, 99];

// nums.sort((a,b)=>a-b);

// console.log(nums);

// console.log(menu.sort((food1, food2) => food1.price - food2.price));


// ---------------------------find-------------

// const nums = [100, 200, 300, 400];

// const ans = nums.find((num) => {
//     return num === 200;
// });

// const eggCurry = menu.find((food) => food.name === 'Egg Curry');
// console.log(eggCurry);

// ----------------------some ----------------------


const isEggCurryPresent = menu.some((food) => food.name === 'Chicken Curry');

console.log(isEggCurryPresent);






