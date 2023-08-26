
// const arr = [1, 2, 3];

// const person = {
//     name: 'Vivek',
//     age: 22
// }

// const p1 = Object.create(person);

// const p2 = Object.create(p1);


// function Person(name, age) {
//     console.log(this);
//     console.log(name);
//     console.log(age);
// }

// // Below both statements are equivalant
// window.Person("Vivek", 22);
// Person("Vivek", 22)

// const obj = {
//     favColor: {
//         getFavColor: function () {
//             console.log('Inside Fav Color');
            
//         }  
//     },
//     person: function () {
//         console.log(this);
//     }
// }

// obj.person();


function Car(name, price) {
    this.name = name;
    this.price = price;
}

Car.prototype.startCar = function () {
    console.log(`Starting a car ${this.name}`);
}

const c1 = new Car("BMW", 1000);
const c2 = new Car("Ferrari", 2000);



