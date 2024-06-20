import React from 'react'
import styles from './styles.module.css'

const Tickets = () => {
  return (
    <div className='container'>
        <h2 className={styles.title}>Tickets</h2>
        <p className={styles.para}>Choose your ticket plan</p>

        <div className={styles.plansWrap}>
            
            <div className={`${styles.plan} ${styles.leftplan}`}>
                <h3 className={styles.planTitle}>Regular Meet & Greet tickets</h3>
                <div className={styles.priceWrap}>
                    <sup>$</sup>
                    <div className={styles.price}>1,750</div>
                    <div className={styles.duration}>/month</div>
                </div>
                <div className={styles.featuresWrap}>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Regular tickets are often less expensive than Reserved Seating tickets.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Regular tickets are usually easier to obtain for popular events.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        There are typically more General Admission tickets available.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Fans can take a picture with the artist.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Fans have a limited time with the artist on or before a concert.
                    </div>
                </div>
                <a href="/buy" className={styles.cta}>buy now</a>
            </div>

            <div className={`${styles.plan} ${styles.centerplan}`}>
                <h3 className={styles.planTitle}>Regular Meet & Greet tickets</h3>
                <div className={styles.priceWrap}>
                    <sup>$</sup>
                    <div className={styles.price}>1,750</div>
                    <div className={styles.duration}>/month</div>
                </div>
                <div className={styles.featuresWrap}>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Regular tickets are often less expensive than Reserved Seating tickets.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Regular tickets are usually easier to obtain for popular events.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        There are typically more General Admission tickets available.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Fans can take a picture with the artist.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Fans have a limited time with the artist on or before a concert.
                    </div>
                </div>
                <a href="/buy" className={styles.cta}>buy now</a>
            </div>

            <div className={`${styles.plan} ${styles.rightplan}`}>
                <h3 className={styles.planTitle}>Regular Meet & Greet tickets</h3>
                <div className={styles.priceWrap}>
                    <sup>$</sup>
                    <div className={styles.price}>1,750</div>
                    <div className={styles.duration}>/month</div>
                </div>
                <div className={styles.featuresWrap}>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Regular tickets are often less expensive than Reserved Seating tickets.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Regular tickets are usually easier to obtain for popular events.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        There are typically more General Admission tickets available.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Fans can take a picture with the artist.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Fans have a limited time with the artist on or before a concert.
                    </div>
                </div>
                <a href="/buy" className={styles.cta}>buy now</a>
            </div>
        </div>
    </div>
  )
}

export default Tickets