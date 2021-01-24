import React from 'react'
import styles from "./Card.module.css";
const Cards = ({src,title,price,arival,clickCard}) => {
    return (
        <div className={styles.cards} onClick={clickCard}>
            <img src={src} alt="images" />
            <p>{title}</p>
            <p>{price}</p>
            <p>{arival}</p>
        </div>
    )
}

export  {Cards}
