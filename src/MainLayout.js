import React from 'react'
import styles from '../styles/Home.module.css'

const MainLayout = ({children}) => {
  return (
    <main className={styles.main}>
          {children}
      </main>
  )
}

export default MainLayout