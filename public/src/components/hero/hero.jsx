import React from 'react'
import styles from './hero.module.css'

const hero = () => {
  return (
    <div className="container">
        <div className={styles.heroWrap}>
        <div className={styles.content}>
            <h1 className={styles.title}>Connect with Your Favorite Celebrities Like Never Before!</h1>
            <p className={styles.subtitle}>
                Exclusive Meet and Greet Experiences Just a Click Away
            </p>
            <a href="/buy" className={styles.cta}>buy now</a>
        </div>
        <img src="/hero.jpg" className={styles.hero} alt="" />
    </div>
    </div>
  )
}

export default hero