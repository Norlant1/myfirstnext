import React from 'react'
import styles from '../styles/Home.module.css'

const HeaderLayout = ({children}) => {
  return (
    <header className={styles.header}>
     {children}
   </header>
  )
}

export default HeaderLayout