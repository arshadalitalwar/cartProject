import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
import {AuthContext} from "../Context/AuthContextProvide"
const Navbar = () => {
    const { cartData } = React.useContext(AuthContext);


    return (
        <div className={styles.navbar}>
            <div>
                <Link className={styles.link} to="/"><img src="https://i.imgur.com/3txNEp6.png" alt="logo" /></Link>
                <Link className={styles.link} to="/women" >Women</Link>
                <Link className={styles.link} to="/men" >Men</Link>
            </div>
            <div className={styles.cart}>
                <Link className={styles.loginlink} to="/login">Log in</Link>
                <Link style={{display:'flex',color:"white",textDecoration:"none"}} to="/cart"><img style={{ width: 30 }} src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg" alt="Cart" />{`(${cartData.length})`}</Link>
            </div>
        </div>
    )
}

export  {Navbar}
