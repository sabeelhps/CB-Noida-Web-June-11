const express = require('express');
const { BadRequestError } = require('./core/ApiError');
const app = express();

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
})

// Custom error handling middleware
app.use((err, req, res, next) => {
    const { message, status } = err;
    res.status(status).send(message);
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});