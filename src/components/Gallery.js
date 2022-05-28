import React from 'react'
import styles from './Gallery.module.scss'


function Gallery() {
     return (
          <section className={styles.templateGallery}>
               <div className={styles.template}></div>
               <div className={styles.template}></div>
               <div className={styles.template}></div>
               <div className={styles.template}></div>
               <div className={styles.template}></div>
               <div className={styles.template}></div>
          </section>
     );
}
export default Gallery