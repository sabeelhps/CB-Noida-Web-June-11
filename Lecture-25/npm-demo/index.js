const colors = require('colors');
const giveMeAJoke = require('give-me-a-joke');
const figlet = require("figlet");

const greeting = "Hello from Node JS";

console.log(greeting.rainbow);

giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
});


figlet("NodeJS", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
});