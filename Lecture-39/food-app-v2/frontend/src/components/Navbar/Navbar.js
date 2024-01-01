import React, {useContext} from 'react';
import classes from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
import CartContext from '../../store/cart-context';

const Navbar = () => {

  const {cartLength} = useContext(CartContext);

  return (
    <nav className={classes.nav}>
      <ul>
        <li><NavLink to="/foods">React Foods</NavLink></li>
        <li style={{ width:'150px'}}>
          <NavLink to="/cart">Cart <sup>{cartLength}</sup> </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;