
// Call, bind and apply method

function sayHello(name,age) {
    console.log(this);
    console.log(name);
    console.log(age);
}

const obj = {
    a: 10,
    l: true
}

// sayHello.call(obj, "Vivek", 22);

const f = sayHello.bind(obj);
// ..
// ..
// .

// f("Garvit", 22);

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function ElectronicGadget(name, price, isDC) {
    this.isDC = isDC;
    Product.call(this, name, price);
}

function Shirt(name, price, color, size) {
    this.color = color;
    this.size = size;
    Product.call(this, name, price);
}

const p1 = new ElectronicGadget("Macbook Air", 2000, false);

const s1 = new Shirt("Peter England", 2000, "Blue", "M");

console.log(p1);
console.log(s1);




