import React from 'react'
import { AuthContext } from "../Context/AuthContextProvide";

const Cart = () => {
    const { cartData } = React.useContext(AuthContext);


    return (
        <div style={{marginTop:100,textAlign:"center"}} >
            <h1>Cart</h1>
            {cartData?.map((e) =>
            <div style={{display:"flex" ,alignItems:"center",width:"60%",backgroundColor:"#FAF9F8",margin:"20px auto",justifyContent:'space-around'}}>
                <div>
                    <img src={e.image} alt="images" />
                </div>
                    <div>
                        <h1>{e.title}</h1>
                        <h2>{e.price}</h2>
                        <button>Remove</button>
                </div>
            </div>)
            }
        </div>
    )
}

export  {Cart}
