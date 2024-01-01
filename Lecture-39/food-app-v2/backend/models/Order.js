const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    items: [
        {
            name: String,
            priice: Number,
            desc: String,
            qty: Number
        }
    ]
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;