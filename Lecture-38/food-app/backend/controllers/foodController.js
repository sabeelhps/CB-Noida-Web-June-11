const express = require('express');
const router = express.Router();
const Food = require('../models/Food');


router.get('/foods', async (req, res) => {
    const foods = await Food.find({});
    res.json(foods);
});

module.exports = router;