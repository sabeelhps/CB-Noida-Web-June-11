import React,{useContext} from 'react';
import CartContext from '../store/cart-context';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, placeOrder } = useContext(CartContext);

  const placeOrderHandler = () => {
    placeOrder();
  }
  return (
    <ul className={styles.cart}>
      <li>My Cart</li>
      {
          cart.map((item,idx) => {

            return <li key={idx}>
                  <p className={styles['item-name']}>{ item.name} <span className={styles['item-qty']}>x { item.qty}</span></p>
                  <p className={styles['item-desc']}>{ item.desc}</p>
                  <p className={styles['item-price']}>$ {item.price}</p>
                <button>-</button>
                <button>+</button>
                <button className={styles['remove-btn']}>remove</button>
              </li>
          })
      }
    <li onClick={placeOrderHandler}>Total:0  <span className={styles['place-order-btn']}><button>Place Order</button></span> </li>
</ul>
  )
}

export default Cart