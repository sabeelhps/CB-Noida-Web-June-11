// Destructring - Arrays and Objects

// Array Destructring
const fruits = ["Apple", "Mango", "Oranges"];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit)

// const firstFruit = fruits[0];
// const secondFruit = fruits[1];

// Object Destructring

const car = {
    name: 'BMW',
    price: 200,
    isDiscBrake:true
}

const { name: carName, price, color='Black' } = car;

// The above is same as writing
// const name = car.name 
// const price = car.price 

console.log(carName)
console.log(price);
console.log(color);

// Spread Operator

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7];

const res = [...arr2, 10, 20, ...arr1];

console.log(res);
console.log(Math.max(...arr1));
console.log(Math.min(...arr1));

const laptop = {
    brandName: 'Apple',
    processor: 'M1',
    price: 10000,
    stoarge: '256 GB'
}

const macbookPro = {
    ...laptop,
    color: 'Gray',
    screen:'Amoled'
}

console.log(macbookPro);

// Rest Paramter

function a(...nums) {
    console.log(nums);
}

a(1, 2, 3, 4, 5);







