import React from 'react'
import styles from './Intro.module.scss'

function Intro() {
     return <section className={styles.intro}>

          <h1 className={styles.introTitle}>
               Job Winning Resume
          </h1>
          <h3 className={styles.introSubTitle}>
               Being easy to use doesn't have to mean that you are forced into using a pre-made template. Make your resume stand out from the pack by trying different colours, fonts, headline formats and much more.
          </h3>
     </section>;
}


export default Intro