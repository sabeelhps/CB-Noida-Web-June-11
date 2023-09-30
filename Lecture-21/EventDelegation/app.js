const allButtons = document.querySelectorAll('button');
const section = document.querySelector('section')


// Bad way
// for (let btn of allButtons) {
//     btn.addEventListener('click', function () {
//         btn.style.backgroundColor = 'aqua';
//     })
// }

section.addEventListener('click', function (event) {
    // console.log(event.target);
    if (event.target.nodeName === 'BUTTON') {
        event.target.style.backgroundColor = 'aqua';        
    }
})