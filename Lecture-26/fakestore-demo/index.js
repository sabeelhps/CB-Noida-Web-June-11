const express = require('express');
const axios = require('axios');
const app = express();

// https://fakestoreapi.com/products

const FAKE_STORE_BASE_URL = "https://fakestoreapi.com";

app.get('/products', async (req, res) => {
    const fakeResponse = await axios.get(`${FAKE_STORE_BASE_URL}/products`);
    if (fakeResponse.status !== 200) {
        return res.send('Something went wrong!');
    }
    res.send(fakeResponse.data);
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const fakeResponse = await axios.get(`${FAKE_STORE_BASE_URL}/products/${id}`);
    if (fakeResponse.status !== 200) {
        return res.send('Something went wrong!');
    }
    res.send(fakeResponse.data);
});

// I/O Calls in series
app.get('/fake-user-cart/:id', async (req, res) => {
    const { id } = req.params;
    const userProfile = await axios.get(`${FAKE_STORE_BASE_URL}/users/${id}`);
    const userCart = await axios.get(`${FAKE_STORE_BASE_URL}/carts/user/${id}`);
    
    const response = {
        user: userProfile.data,
        cart: userCart.data
    }
    res.send(response);
});

// I/O Calls in parellel
app.get('/optimised-fake-user-cart/:id', async (req, res) => {
    const { id } = req.params;
    const userProfilePromise = axios.get(`${FAKE_STORE_BASE_URL}/users/${id}`);
    const userCartPromise = axios.get(`${FAKE_STORE_BASE_URL}/carts/user/${id}`);
    
    const fakeResponse = await Promise.all([userProfilePromise, userCartPromise]);

    const userProfile = fakeResponse[0].data;
    const userCart = fakeResponse[1].data;

    const response = {
        user: userProfile.data,
        cart: userCart.data
    }
    res.send(response);
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});