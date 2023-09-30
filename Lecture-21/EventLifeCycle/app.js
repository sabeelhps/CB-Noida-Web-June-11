const grandParent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandParent.addEventListener('click', function (event) {
    console.log('grandparent'); 
}, true);

parent.addEventListener('click', function (event) {
    console.log('Parent');
    event.stopPropagation();
}, false);

child.addEventListener('click', function (event) {
    console.log('child');
}, true)

