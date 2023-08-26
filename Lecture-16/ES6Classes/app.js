class Car{
    constructor(name, price) {
        // properties
        this.name = name;
        this.price = price;
    }

    // Methods
    startCar() {
        console.log(`Starting a car ${this.name}`);
    }
}

const c1 = new Car("BMW", 1000);
const c2 = new Car("Ferrari", 2000);

class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
    // Bad Way
    distance(p1, p2) {
        const dist = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
        return dist;
    }

    // Better
    distancev1(p) {
        const dist = Math.sqrt((this.x - p.x)**2+ (this.y-p.y)**2);
        return dist;
    }

    static euclidianDistance(p1, p2) {
        const dist = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
        return dist;
    }
}

const p1 = new Point(2, 3);
const p2 = new Point(5, 6);

