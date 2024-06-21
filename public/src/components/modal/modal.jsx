import React from 'react'
import styles from './styles.module.css'

const Modal = ({open, setOpen, title, body}) => {
  return (
    <div 
    onClick={()=> setOpen(false)}
    className={`${styles.modalWrap} ${open? styles.open:styles.hide}`}>
        <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.line}></div>
            <p>
               {body}
            </p>
            <button 
            onClick={()=> setOpen(false)}
            className={styles.closeBtn} >close</button>
        </div>
    </div>
  )
}

export default Modal