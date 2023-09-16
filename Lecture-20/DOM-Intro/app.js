// Step 1 : Select the element
const h1 = document.getElementById('heading');

// Step 2 : Manipulation
h1.style.backgroundColor = 'purple';
h1.style.textDecoration = 'line-through';
h1.style.color = 'white';

const favMovies = document.getElementsByClassName('fav-movie');

for (let movie of favMovies) {
    movie.style.textDecoration = 'line-through';
}

// ========================Toggle Image Example=========

const URL1 = "https://images.unsplash.com/photo-1694530126645-4300ebe5409c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60";
const URL2 = "https://images.unsplash.com/photo-1693280833536-34fa42fc459e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60";

const image = document.querySelector('img');

let isTrue = false;

function toggleImage() {
    if (isTrue) {
        image.setAttribute('src', URL1);
    } else {
        image.setAttribute('src', URL2);
    }
    isTrue = !isTrue;
}

// setInterval(toggleImage, 1000);

// =========================Hide and show paragraph==========

const para = document.querySelector('p');

// setInterval(() => {
//     para.classList.toggle("hide");
// }, 1500);


// ===================================

const btn = document.querySelector('button');

const existingClasses = btn.getAttribute('class');

btn.setAttribute('class', `${existingClasses} two three`);
