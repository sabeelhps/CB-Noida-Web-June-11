const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/orders', async(req, res) => {
    const { cart } = req.body;
    const order = await Order.create({ items: cart });
    console.log(`Order created with orderId ${order._id}`);
    res.json(order._id);
})

module.exports = router;