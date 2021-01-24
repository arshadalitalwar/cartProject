import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Components/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.FooterContainer} >
            <div>
                <div className={styles.FooterTop} >
                    <Link className={styles.FooterTopLink} to="/about">About</Link>
                    <Link className={styles.FooterTopLink}>  Careers </Link>
                    <Link className={styles.FooterTopLink}>Press and Media</Link>
                    <Link className={styles.FooterTopLink}>Shopify Plus </Link>
                    <Link className={styles.FooterTopLink}>Sitemap</Link>
                </div>
                <div className={styles.FooterMiddle}>
                    <div>
                        <h4 className={styles.FooterTopLink}>POINT OF SALE</h4>
                        <Link className={styles.FooterTopLink}>Point of sale</Link>
                        <br/>
                        <Link className={styles.FooterTopLink}>Features</Link>
                        <br/>
                        <Link className={styles.FooterTopLink}>Hardware</Link>
                     
                    </div>
                    <div>
                    <h4 className={styles.FooterTopLink}>SUPPORT</h4>
                        <Link className={styles.FooterTopLink}>24/7 support</Link>
                        <br />
                        
                        <Link className={styles.FooterTopLink}>Forums</Link>
                        <br/>
                        <Link className={styles.FooterTopLink}>API documentation</Link>
                        <br/>
                        <Link className={styles.FooterTopLink}>Free stock photos</Link>
                        <br/>
                        <Link className={styles.FooterTopLink}>Business name generator</Link>
                    </div>
                    <div>
                    <h4 className={styles.FooterTopLink}>SHOPIFY</h4>
                        <Link className={styles.FooterTopLink}>Partner program</Link>
                        <br/>
                        <Link className={styles.FooterTopLink}>Affiliate program</Link>
                        <br/>
                        <Link className={styles.FooterTopLink}>App developers</Link>
                        <br/>
                        <Link className={styles.FooterTopLink}>Shopify events</Link>
                    </div>
                </div>
            </div>
            <div className={styles.FooterBottom}>
                <div>
                    <a href="https://www.facebook.com/arshadali.talwar"><img style={{ height: 30, borderRadius: "50%" }} src="https://i.imgur.com/YGHkaNW.png" alt="facebook" /></a>
                    <a href="https://twitter.com/ArshadAliTalwar"><img style={{ height: 30, borderRadius: "50%" }} src="https://i.imgur.com/uBj9vfb.png" alt="facebook" /></a>
                    <a href="https://www.facebook.com/arshadali.talwar"><img style={{ height: 30, borderRadius: "50%" }} src="https://i.imgur.com/NJMDevK.png" alt="facebook" /></a>
                </div>
            </div>
        </div>
    )
}

export  {Footer}
