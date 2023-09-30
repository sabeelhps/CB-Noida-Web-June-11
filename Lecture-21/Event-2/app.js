const h1 = document.querySelector('h1');

function colorize() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}


h1.addEventListener('click', colorize);

const buttons = document.querySelectorAll('button');

for (let btn of buttons) {
    btn.addEventListener('click',colorize)
}