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
                <h3 className={styles.planTitle}>VVIP Meet & Greet tickets</h3>
                <div className={styles.priceWrap}>
                    <sup>$</sup>
                    <div className={styles.price}> 15,000</div>
                    <div className={styles.duration}>/month</div>
                </div>
                <div className={styles.featuresWrap}>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Parallel access to the artist and VIP lounge or Greenroom.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Special entry point.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Drinks served.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Proximity to the stage.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Proximity to backstage.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Fan can have limited access to the artists.
                    </div>
                </div>
                <a href="/buy" className={styles.cta}>buy now</a>
            </div>

            <div className={`${styles.plan} ${styles.rightplan}`}>
                <h3 className={styles.planTitle}>VIP Meet & Greet tickets</h3>
                <div className={styles.priceWrap}>
                    <sup>$</sup>
                    <div className={styles.price}>8,200</div>
                    <div className={styles.duration}>/month</div>
                </div>
                <div className={styles.featuresWrap}>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Priority entrance.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Access to exclusive areas.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Meet-and-greet opportunities with artists.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Guaranteed better viewing spots (elevated platforms or seats close to the stage).
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Fan can host the artists.
                    </div>
                    <div className={styles.feature}>
                        <i className="fas fa-check"></i>
                        Fan can have a nice moment with the artist in his or her own comfort zone.
                    </div>
                </div>
                <a href="/buy" className={styles.cta}>buy now</a>
            </div>
        </div>
    </div>
  )
}

export default Tickets