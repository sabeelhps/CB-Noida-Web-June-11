const btn = document.querySelector('button');

// console.dir(btn);

function shout() {
    console.log('Shouttt!..');
}

function scream() {
    console.log('Scream....');
}

// btn.onclick = shout;
// btn.onclick = scream;

btn.addEventListener('click', shout);
btn.addEventListener('click', scream);

btn.addEventListener('dblclick', function () {
    console.log('Its a double click event');
});

// ---------------------------Common Events---------

// Click

const h2 = document.querySelector('h2');

h2.addEventListener('click', function () {
    h2.classList.toggle('border');
});

// Keyboard Events

const inp = document.querySelector('input');

inp.addEventListener('keypress', function (event) {
    // console.log(event);
    if (event.key == "Enter") {
        console.log(inp.value);
        console.log(event.target);
    }
});

// Mouse Events - Hovering

const buttons = document.querySelectorAll('section button');

for (let btn of buttons) {
    btn.addEventListener('mouseenter', function (event) {
        btn.classList.add('bg');
        console.log(event.target)
    })
    btn.addEventListener('mouseleave', function () {
        btn.classList.remove('bg');
    })
}

// Form Events

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(form.elements.username.value);
    console.log(form.elements.password.value);
})







