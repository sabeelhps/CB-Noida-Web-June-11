const express = require('express');
const app = express();
const cors = require('cors');

// controllers
const foodController = require('./controllers/foodController');
const orderController = require('./controllers/orderController');

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb', parameterLimit: 5000 }));

app.use(foodController);
app.use(orderController);

module.exports = app;