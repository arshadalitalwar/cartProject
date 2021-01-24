import React from 'react'
import axios from "axios";
import { Cards } from '../Components/Cards';
import styles from "../Components/Card.module.css"
import { useHistory } from "react-router-dom"
import {AuthContext} from "../Context/AuthContextProvide"

const Women = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState([]);
    const {toggle,isAuth} = React.useContext(AuthContext);
    React.useEffect(() => {
        handleData();  
    },[])

    const handleData = () => {
        setIsLoading(true)
        axios.get("https://www2.hm.com/en_in/women/new-arrivals/view-all/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=40")
            .then((res) => {
                console.log(res.data.products);
                setData(res.data.products);
                setIsLoading(false)
            }).catch((er) => {
                console.log(er);
                setIsLoading(false)
            })
        
    }
    const handleCard = (id) => {
        if (isAuth === true) {
            history.push(`/women/${id}`);
            toggle(data);
        } else {
            history.push("/login");
        }
       
    }
    return isLoading?<div style={{marginTop:100}}>...Loading</div>: (
        <div className={styles.cardContainer}>
            {data?.map((e) =><Cards clickCard={()=>handleCard(e.articleCode)} key={e.articleCode} src={e.image[0].src} price={e.price} title={e.title} arival={e.sellingAttribute} ></Cards> )}

        </div>
    )
}

export  {Women}
