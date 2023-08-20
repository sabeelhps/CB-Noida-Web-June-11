
// var a = 100;

// function fun() {
//     var b = 200;

//     innerFun();

//     function innerFun() {
//         console.log(b);
//         console.log('Inside inner fun');
//     }

// }

// fun();
// console.log(a);


var name = 'Sarah';

function greet() {
    console.log(name);
}

function fun() {
    var name = 'ABC';
    greet();
    console.log(name);
}

fun();
console.log(name);