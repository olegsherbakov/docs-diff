import * as React from 'react'

import styles from './styles.scss'

const Index: React.FC = () => (
  <div className={styles.Legend}>
    <span className={styles.Green}>– отличающиеся фрагменты</span>
    <span className={styles.Blue}>
      – фрагменты, присутствующие только в одной из редакций
    </span>
  </div>
)

export default Index
