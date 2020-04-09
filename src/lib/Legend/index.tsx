import * as React from 'react'

import './styles.scss'

const Index: React.FC = () => (
  <div className="legend l-ta-center">
    <span className="green">– отличающиеся фрагменты</span>
    <span className="blue">
      – фрагменты, присутствующие только в одной из редакций
    </span>
  </div>
)

export default Index
