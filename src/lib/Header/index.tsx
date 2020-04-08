import * as React from 'react'

import './styles/index.scss'

const Index: React.FC = () => (
  <div className="header clear">
    <div className="left">
      <select>
        <option value="">Редакция от 01.01.1976</option>
      </select>
    </div>

    <div className="right">
      <select>
        <option value="">Редакция от 01.01.2020</option>
      </select>
    </div>
  </div>
)

export default Index
