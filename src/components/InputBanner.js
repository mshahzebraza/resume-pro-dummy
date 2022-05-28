import React from 'react'
import styles from './InputBanner.module.scss'

function InputBanner() {
     return (<div className={styles.inputBanner}>
          <p>Drag and Drop Files here</p>
          <p>OR</p>
          <button className={styles.primaryBtn}>Browse Files</button>
     </div>);
}

export default InputBanner