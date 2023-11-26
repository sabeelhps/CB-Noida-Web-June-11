const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('We need a better secret'));

const cart = [
    {
        name: 'Iphone',
        price: 100
    },
    {
        name: 'Macbook',
        price: 200
    }
]

app.get('/', (req, res) => {
    res.cookie('mode', 'dark');
    res.send('Hello from server');
});

app.get('/cart', (req, res) => {
    res.cookie('cart', JSON.stringify(cart));
    res.send('Setting cart in users cookies');
})

app.get('/fruit', (req, res) => {
    res.cookie('fruit', 'apple', { signed: true });
    res.send('Sent you a cookie!');
})

app.get('/hello', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send('Hello World!');
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});