import React, { createContext, useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
import { createOrder } from '../lib/apis';

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addToCart: () => { },
    placeOrder : ()=>{}
});

export const CartContextProvider = (props) => {

    const { data, status, error, sendRequest: placeOrderRequest } = useHttp(createOrder);

    const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem('cart') || '[]'));

    const addToCart = (newItem) => {
        console.log(newItem);
        const isPresent = cart.some((item) => item.foodId === newItem.foodId);

        console.log(isPresent);
        if (isPresent) {
            setCart(() => {
                return cart.map((item) => newItem.foodId === item.foodId ? { ...item, qty: item.qty + 1 } : item);
            })
        } else {
            setCart(() => [...cart, newItem]);
        }
    }

    const placeOrder = () => {
        placeOrderRequest(cart);
    }

    if (data && status === 'completed') {
        console.log(data);
    }

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const context = {
        cart: cart,
        cartLength: cart.length,
        addToCart,
        placeOrder
    }
    
    return <CartContext.Provider value={ context }>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;