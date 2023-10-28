const express = require('express');
const app = express();
const { v4: uuid } = require('uuid');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const products = [
    {
        id: uuid(),
        name: 'Iphone',
        price: 100,
        image: 'https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww'
    },
    {
        id: uuid(),
        name: 'Macbook',
        price: 200,
        image: 'https://images.unsplash.com/photo-1519923834699-ef0b7cde4712?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: uuid(),
        name: 'Apple Watch',
        price: 300,
        image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fHww'
    }
];

app.get('/v1/products', (req, res) => {
    res.json(products); 
});

app.get('/v2/products', (req, res) => {
    const newProductsList = products.map((product) => {
        return { ...product, date_created: new Date() };
    });
    return res.render('index', { products: newProductsList });
});

app.get('/products/new', (req, res) => {
    res.render('new');
});

app.post('/products', (req, res) => {
    res.send('POST Route');
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});