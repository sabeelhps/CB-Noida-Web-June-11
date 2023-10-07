const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');

const H = 600;
const W = 938;

let score = 0;

class Food{
    constructor() {
        this.x = 0;
        this.y = 0;
        this.foodSize = 67;
    }

    createFood() {
        this.x = Math.floor((Math.random() * (W - this.foodSize))/this.foodSize) * this.foodSize;
        this.y = Math.floor((Math.random() * (H - this.foodSize))/this.foodSize) * this.foodSize;
    }

    drawFood() {
        pen.fillStyle = 'red';
        pen.fillRect(this.x, this.y, this.foodSize, this.foodSize);
    }
}

class Snake{
    constructor() {
        this.init_len = 5;
        this.direction = 'right';
        this.cells = [];
        this.cellSize = 67;
        for (let i = 0; i < this.init_len; i++){
            this.cells.push({ x: i, y: 0 });
        }
    }

    updateSnake() {
        let new_X = null
        let new_Y = null;

        const headX = this.cells[this.cells.length - 1].x;
        const headY = this.cells[this.cells.length - 1].y;

        console.log(headX, headY);

        // Collision conditon for the snake with food
        if (headX * this.cellSize === food.x && headY* this.cellSize === food.y) {
            food.createFood();
            score++;
        } else {
            this.cells.shift();
        }

        if (this.direction === 'down') {
            new_X = headX;
            new_Y = headY + 1;
        }
        else if (this.direction === 'left') {
            new_X = headX - 1;
            new_Y = headY;
        }
        else if (this.direction === 'up') {
            new_X = headX;
            new_Y = headY - 1;
        }
        else {
            // When snake is moving towards right
            new_X = headX + 1;
            new_Y = headY;
        }

        this.cells.push({ x: new_X, y: new_Y });
    }

    drawSnake() {
        for (let i = 0; i < this.cells.length; i++){
            const cell = this.cells[i];
            if (i === this.cells.length - 1) {
                pen.fillStyle = 'purple';
                pen.fillRect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize-2, this.cellSize-2);
            } else {
                pen.fillStyle = 'yellow';
                pen.fillRect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize-2, this.cellSize-2);
            }
        }
    }
}

const snake = new Snake();
const food = new Food();


function init() {
    function changeSnakeDirection(e) {
        if (e.key === 'ArrowLeft') {
            snake.direction = 'left';
        }
        else if (e.key === 'ArrowUp') {
            snake.direction = 'up';
        }
        else if (e.key === 'ArrowDown') {
            snake.direction = 'down';
        } else {
            snake.direction = 'right';
        }
    }

    document.addEventListener('keydown', changeSnakeDirection);
    food.createFood();
    console.log(food);
    pen.font = '40px serif';
}

function update() {
    snake.updateSnake();
    
}

function draw() {
    pen.clearRect(0, 0, W, H);
    snake.drawSnake();
    food.drawFood();
    pen.fillStyle = 'blue';
    pen.fillText(`Score : ${score}`, 50, 50);
}

function gameLoop() {
    update();
    draw();
}

init();

const id = setInterval(gameLoop, 100);