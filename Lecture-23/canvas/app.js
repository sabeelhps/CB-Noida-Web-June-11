const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');

const cs = 67;
pen.fillRect(50, 50, cs, cs);

let init_x = 50;
let init_y = 50;

let curr_x = init_x;
let curr_y = init_y;

const H = 600;
const W = 900;

// pen.fillStyle = 'red';
// pen.fillRect(200, 300, 400, 200);

function init() {
    
}

function draw() {
    pen.clearRect(0, 0, W, H);
    pen.fillRect(curr_x, curr_y, cs, cs);
}

function update() {
    curr_x = curr_x + cs;
}

function gameLoop() {
    update();
    draw();
}

init();

const id = setInterval(gameLoop, 200);


