import React from 'react'
import styles from './styles.module.css'

const Contact = () => {
  return (
    <div className='container'>
        <h2 className={styles.title}>contact us</h2>
        <p className={styles.para}>
            We&apos;d love to hear from you! Whether you have a question, need assistance, or want to provide feedback, our team is here to help. Please send us an email or use the live chat to reach us.
        </p>

        <div className={`${styles.contactWrap}`}>
            <div><strong>Email: </strong>info@meetandgreet.com</div>
            <div><strong>Phone: </strong>+1 234  5667 333</div>
            <div><strong>Business Hours: </strong>Monday - Friday, 9:00 AM - 5:00 PM</div>
        </div>

    </div>
  )
}

export default Contact