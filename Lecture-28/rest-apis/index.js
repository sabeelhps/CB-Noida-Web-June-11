const express = require('express');
const app = express();
const { v4: uuid } = require('uuid');
const path = require('path');
const methodOverride = require('method-override');
const axios = require('axios');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Used to populate the request body, when form is submitted.
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

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

// Used to fetch all products
app.get('/v2/products', (req, res) => {
    const newProductsList = products.map((product) => {
        return { ...product, date_created: new Date() };
    });
    return res.render('index', { products: newProductsList });
});

// Display new form
app.get('/products/new', (req, res) => {
    res.render('new');
});


// Create new product
app.post('/products', (req, res) => {
    const { name, price, image } = req.body;
    products.push({ id: uuid(), name: name, price: price, image: image });
    res.redirect('/v2/products');
});

// Show one product
app.get('/products/:productId', (req, res) => {
    const { productId } = req.params;
    const product = products.find((product) => product.id === productId);
    res.render('show', { product });
});

app.get('/products/:productId/edit', (req, res) => {
    const { productId } = req.params;
    const product = products.find((product) => product.id === productId);
    res.render('edit', { product });
});

// Link : https://expressjs.com/en/resources/middleware/method-override.html
app.patch('/products/:productId', (req, res) => {
    const { productId } = req.params;
    const { name, price, image } = req.body;

    // Perform Validation
    
    // Finding the product with the product id
    const product = products.find((product) => product.id === productId);
    
    // Making updation, this will work because object are reference type in nodejs.
    product.name = name;
    product.price = price;
    product.image = image;

    res.redirect(`/products/${productId}`);
});

// Delete route
app.delete('/products/:productId', (req, res) => {
    const { productId } = req.params;
    const productIndex = products.findIndex((product) => product.id === productId);
    
    if (productIndex === -1) {
        return res.status(400)
            .render('error', { message: "Product with this id doesn't exists" });
    }
    
    products.splice(productIndex, 1);
    return res.status(200).redirect('/v2/products');
});



// Caching demo

const cache = new Map();

app.get('/fake-store-products/:productId', async(req, res) => {
    const { productId } = req.params;

    // Cache hit
    if (cache.has(productId)) {
        return res.json(JSON.parse(cache.get(productId)));
    }

    // Cache miss
    const fakeProduct = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    cache.set(productId, JSON.stringify(fakeProduct.data));
    return res.json(fakeProduct.data);
})

app.listen(3000,()=>{
  console.log('server started at port 3000');
});