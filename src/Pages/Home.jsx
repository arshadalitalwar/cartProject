import React from 'react'
import styles from "../Components/Home.module.css"
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();
    return (
        <div className={styles.home}>
            <p>Sale</p>
            <p>Grab it before it's gone!</p>
            <h1>Up to 70% off</h1>
            <p>Online and instore</p>
            <button onClick={()=>history.push("/women")}>Women</button>
            <button onClick={() => history.push("/men")}>Men</button>
        </div>
    )
}

export  {Home}
