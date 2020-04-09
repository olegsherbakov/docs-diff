import * as React from 'react'
import { useSelector } from 'react-redux'

import { selectItems } from '@core/selectors'

import './styles.scss'

const Index: React.FC = () => {
  const items = useSelector(selectItems)

  return (
    <div className="list-holder">
      <div className="list-container">
        {items.map(({ id, left, right, length }) => (
          <div className="paragraph" key={id}>
            id: {id}
            <br />left: {left}
            <br />right: {right}
            <br />length: {length}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
