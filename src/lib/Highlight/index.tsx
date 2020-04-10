import * as React from 'react'
import { useSelector } from 'react-redux'

import { selectHighlight } from '@core/selectors'
import './styles.scss'

const Index: React.FC = () => {
  const highlight = useSelector(selectHighlight)

  if (!highlight.top) {
    return null
  }

  const { top, leftHeight, rightHeight } = highlight
  const transform = `translateY(${top}px)`

  return (
    <div className="highlight">
      <div
        className="left"
        style={{
          height: leftHeight,
          transform,
        }}
      />
      <div
        className="right"
        style={{
          height: rightHeight,
          transform,
        }}
      />
    </div>
  )
}

export default Index
