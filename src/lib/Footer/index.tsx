import * as React from 'react'

import './styles.scss'

const Index: React.FC = () => (
  <div className="footer l-ta-center">
    <span className="prev disable" data-shift="-1">
      « предыдущее изменение
    </span>

    <span className="next" data-shift="+1">
      следующее изменение »
    </span>
  </div>
)

export default Index
