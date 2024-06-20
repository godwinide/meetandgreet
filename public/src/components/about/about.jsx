"use client"

import React,{useState} from 'react'
import styles from './styles.module.css'
import Modal from '../modal/modal'

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='container'>
        <h2 className={styles.title}>About us</h2>
        <p className={styles.para}>
            Welcome to Meet And Greet Booking, your ultimate destination for exclusive meet and greet experiences with your favorite celebrities. Our mission is to bridge the gap between fans and celebrities, creating unforgettable moments that last a lifetime.
        </p>
        <p className={styles.para}>        
            Our mission is to bring joy and inspiration to fans by facilitating meaningful interactions with celebrities. We aim to create a platform that is secure, user-friendly, and filled with diverse opportunities for fans to connect with their idols in unique and memorable ways.
        </p>
        <h2 className={styles.title}>what we offer</h2>
        <ul className={styles.list}>
            <li>
                Exclusive Meet and Greet Packages
            </li>
            <li>
                Secure and Private Interactions
            </li>
            <li>
                Easy Scheduling and Booking
            </li>
            <li>
                Exceptional Customer Support
            </li>
        </ul>
        <p className={styles.para}>
            Join the thousands of fans who have made their dreams a reality. Browse our celebrity listings and book your meet and greet today!
        </p>
        <a href="/buy" className={styles.cta}>buy now</a>
        <button 
            onClick={()=> setOpen(true)}
            className={styles.cta2}>Book Reservation</button>
        <Modal 
            open={open}
            setOpen={setOpen}
        />
    </div>
  )
}

export default About