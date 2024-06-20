import React from 'react'
import styles from './header.module.css'

const header = () => {
    return (
        <div className="container">
        <div className={styles.navWrapper}>
                <a href='/' className={styles.brand}>Meet And Greet Booking</a>
                <div className={styles.links}>
                    <a href='#tickets' className={styles.hidemobile} title='tickets'>Tickets</a>
                    <a href='#about' className={styles.hidemobile}  title='about us'>About Us</a>
                    <a href='#contact' className={styles.hidemobile}  title='contact us'>Contact Us</a>
                    <a href='/buy' className={styles.navBuy}>Buy Now</a>
                </div>
            </div>
        </div>
    )
}

export default header