import React from 'react'
import styles from "./Card.module.css";
const CardDetailComponent = ({ src, title, price, arival, dataAltImage,funcForCart }) => {
    
    



    return (
        <div className={styles.CardDetailComponent}>
            <div><img src={src} alt="images" />
            <img src={dataAltImage} alt="altimage"/></div>
            <div><h3>{title}</h3>
                 <h3>{price}</h3>
                 <button onClick={funcForCart} style={{width:"100%"}}><img style={{height:22 ,marginRight:5}} src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg" alt="cart"></img>ADD</button>
            </div>
            
        </div>
    )
}

export  {CardDetailComponent}