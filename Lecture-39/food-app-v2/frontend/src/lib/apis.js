import axios from 'axios';

const BACKEND_URL = 'http://localhost:8080';

export async function fetchFoods() {
    const res = await axios.get(`${BACKEND_URL}/foods`);
    if (res.status !== 200) {
        throw new Error('cannot fetch foods at the moment!');
    }
    return res.data;
}

export async function createOrder(cart) {
    const res = await axios.post(`${BACKEND_URL}/orders`, { cart });
    if (res.status !== 200) {
        throw new Error('cannot fetch foods at the moment!');
    }
    return res.data;
}
