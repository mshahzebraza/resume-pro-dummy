import React from 'react'
import styles from './AppHeader.module.scss'

function AppHeader() {
     return (
          <header className={styles.appHeader} >
               <h1 className={styles.brandText}>ResumePro</h1>
               <div className={styles.menuIcon}></div>
          </header>
     )
}

export default AppHeader