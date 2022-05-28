import React from 'react'
import styles from './NavBar.module.scss'

function NavBar() {
     return <nav className={styles.nav}>
          <ul className={styles.ctgList}>
               <li className={styles.ctg}>Category 1</li>
               <li className={styles.ctg}>Category 2</li>
               <li className={styles.ctg}>Category 3</li>
               <li className={styles.ctg}>Category 4</li>
               <li className={styles.ctg}>Category 5</li>
               <li className={styles.ctg}>Category 6</li>
          </ul>
          <div className={styles.searchBox}>
               <i className={styles.searchIcon}></i>
               <input type="text" placeholder='Search' className={styles.searchInput} />
          </div>
          <div className={styles.navMenu}>

               <div className={styles.menuIcon}>
               </div>

          </div>
     </nav>;
}


export default NavBar;