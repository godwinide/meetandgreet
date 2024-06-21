import React from 'react'
import styles from './styles.module.css'

const Modal = ({open, setOpen}) => {
  return (
    <div 
    onClick={()=> setOpen(false)}
    className={`${styles.modalWrap} ${open? styles.open:styles.hide}`}>
        <div className={styles.content}>
            <h3 className={styles.title}>A warning Note</h3>
            <div className={styles.line}></div>
            <p>
                Contact the Us via the Live chat or email address to connect you with an agent thanks.
            </p>
            <button 
            onClick={()=> setOpen(false)}
            className={styles.closeBtn} >close</button>
        </div>
    </div>
  )
}

export default Modal