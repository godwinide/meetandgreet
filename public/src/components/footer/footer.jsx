import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <div className={styles.footerWrap}>
        Copyright &copy; Meet And Greet Booking {new Date().getFullYear()}
    </div>
  )
}

export default Footer