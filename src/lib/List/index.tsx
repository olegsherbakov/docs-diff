import * as React from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames'

import { selectItems } from '@core/selectors'
import './styles.scss'

const Index: React.FC = () => {
  const items = useSelector(selectItems)

  return (
    <div className="list">
      {items.map(({ id, left, right, isChanged }) => (
        <div className={cn({ paragraph: true, changed: isChanged })} key={id}>
          <div
            className="left"
            dangerouslySetInnerHTML={{
              __html: left,
            }}
          />
          <div
            className="right"
            dangerouslySetInnerHTML={{
              __html: right,
            }}
          />
          <div className="clear" />
        </div>
      ))}
    </div>
  )
}

export default Index
