const express = require('express');
const { BadRequestError, InternalServerError } = require('./core/ApiError');
const app = express();
const catchAsync = require('./core/catchAsyc');

const sleep = (delay, throwException=false) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (!throwException) {
                resolve();
            } else {
                const err = new InternalServerError('Throwing exception from sleep function.')
                reject(err);
            }
        }, delay);
    })
}

app.get('/hello', (req, res) => {
    const num = Math.floor(Math.random() * 10);
    if (num % 2 === 0) {
        throw new Error('My first error!');
    }
    res.send('Hello');
});

app.get('/greet', (req, res) => {
    const { name } = req.query;
    if (!name) {
        throw new BadRequestError('name field cannot be empty');
    }
    res.send(`Hello ${name}`);
});


app.get('/check', async (req, res, next) => {
    try {
        console.log('Entering check route')
        await sleep(1000);
        const num = Math.floor(Math.random() * 10);
        if (num % 2 === 0) {
            throw new InternalServerError('Internal server error in check route');
        }
        res.send(`check route ${num}`);
    }
    catch (err) {
        next(err);
    }
});

app.get('/welcome', catchAsync(async (req, res, next) => {
    console.log('Enter into welcome route')
    await sleep(2000, true);
    res.send('Sending response after sleeping for 2 secs');
}));

// Custom error handling middleware
// This is should be added at the end of application's middleware stack.
app.use((err, req, res, next) => {
    console.log('Inside error middlewar!');
    const { message, status=500 } = err;
    res.status(status).send(message);
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});