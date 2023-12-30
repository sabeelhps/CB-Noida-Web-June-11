import React, {useContext} from 'react';
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>React Foods</li>
        <li style={{ width:'150px'}}>
          Cart <sup>5</sup> 
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;