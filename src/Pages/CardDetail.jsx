import React from 'react'
import { useParams } from "react-router-dom";
import styles from "../Components/CardDetail.module.css"
import { AuthContext } from "../Context/AuthContextProvide"
import { CardDetailComponent } from '../Components/CardDetailComponent';

const CardDetail = () => {

    const { globData, setCartData } =React.useContext(AuthContext) ;
    let { id } = useParams();
    const handleCart = (obj) => {
        setCartData(prev=>[...prev,obj]);
        
    }

    return (
        <div className={styles.CardDetail}>
            <div >
            {globData?.filter((e)=>e.articleCode===id).map((e) =><CardDetailComponent funcForCart={()=>handleCart({image:e.image[0].src,price:e.price,title:e.title ,id:e.articleCode}) } dataAltImage={e.image[0].dataAltImage}  key={e.articleCode} src={e.image[0].src} price={e.price} title={e.title} arival={e.sellingAttribute} ></CardDetailComponent> )}
            </div>
        </div>
    )
}

export  {CardDetail}
