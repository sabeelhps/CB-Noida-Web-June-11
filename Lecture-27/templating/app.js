const express = require('express');
const app = express();
const path = require('path');

// console.log(process.cwd());
// console.log(__dirname);

// You are telling express that we will use ejs for creating templates.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const products = [
    {
        id: 1,
        name: 'Iphone',
        imgUrl:'https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww',
        desc: 'Most expensive phone these days.',
        price:'23562376'
    },
    {
        id: 2,
        name: 'Macbook',
        imgUrl:'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D',
        desc: 'Most expensive phone these days.',
        price:'23562376'
    },
    {
        id: 3,
        name: 'Apple Watch',
        imgUrl:'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D',
        desc: 'Most expensive phone these days.',
        price:'23562376'
    },
]


app.get('/hello', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100);
    res.render('index',{randomNumber});
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/products', (req, res) => {
    res.render('products', { products });
})


app.listen(3000,()=>{
  console.log('server started at port 3000');
});