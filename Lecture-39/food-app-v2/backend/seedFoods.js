const mongoose = require('mongoose');
const Food = require('./models/Food');

mongoose.connect('mongodb://127.0.0.1:27017/food-app-june-23')
    .then(() => console.log("Connected"))
    .catch(() => console.log('Error!!!!'));


const DUMMY_FOODS = [
    {
        name: 'Burger',
        desc: 'Extra Cheese and Spice',
        price: 10
    },
    {
        name: 'Panner Tikka',
        desc: 'Extra Cheese and Spice',
        price: 12
    },
    {
        name: 'Pizza',
        desc: 'Extra Cheese and Spice',
        price: 8
    },
    {
        name: 'Noodles',
        desc: 'Extra Cheese and Spice',
        price: 9
    },
    {
        name: 'Burger',
        desc: 'Extra Cheese and Spice',
        price: 7
    }
];



const seedFood = async () => {
    await Food.deleteMany({});
    await Food.insertMany(DUMMY_FOODS);
    console.log("FOOD SEEDED");
    await mongoose.disconnect();
}

seedFood();