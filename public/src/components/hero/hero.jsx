"use client"

import React, {useState} from 'react'
import styles from './hero.module.css'
import Modal from '../modal/modal'

const hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
        <div className={styles.heroWrap}>
        <div className={styles.content}>
            <h1 className={styles.title}>Connect with Your Favorite Celebrities Like Never Before!</h1>
            <p className={styles.subtitle}>
                Exclusive Meet and Greet Experiences Just a Click Away
            </p>
            <a href="/buy" className={styles.cta}>buy now</a>
            <button 
            onClick={()=> setOpen(true)}
            className={styles.cta2}>Book Reservation</button>
        </div>
        <img src="/hero.jpg" className={styles.hero} alt="" />
    </div>
    <Modal 
    open={open}
    setOpen={setOpen}
    />
    </div>
  )
}

export default hero