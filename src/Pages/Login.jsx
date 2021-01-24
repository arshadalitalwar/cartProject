import React from 'react'
import { Redirect } from 'react-router-dom';

import styles from "../Components/Navbar.module.css"
import {AuthContext} from "../Context/AuthContextProvide"
const Login = () => {
    const {isAuth, setIsAuth } = React.useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAuth((pev) => !pev)

    }
    return !isAuth?  (
        <div className={styles.loginPage}>
            <div className={styles.insidelogin}>
                <img src="https://i.imgur.com/AWW2aKD.png" alt="logo" />
                <div className={styles.inputs}>
                <h2>Log in</h2>
                   <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username" />
                        <br/>
                        <input type="text"  placeholder="Password"/>
                        <br/>
                        <input style={{backgroundColor:"#002e25" ,color:"white",marginLeft:2}} type="submit"/>
                    </form>
                </div>
               
            </div>  
        </div>
    ) : (
            <Redirect to="/"></Redirect>
    )
}

export  {Login}
