import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'

import { navigate } from '@core/actions'
import { selectItems } from '@core/selectors'
import './styles.scss'

const Index: React.FC = () => {
  const items = useSelector(selectItems)
  const dispatch = useDispatch()
  const onClick = (event: React.SyntheticEvent<EventTarget>): void => {
    const target = event.target as HTMLElement
    const currentTarget = event.currentTarget as HTMLElement
    const id = +currentTarget.getAttribute('data-id')

    if (target.tagName === 'SPAN' && /^change|add$/.test(target.className)) {
      dispatch(navigate(id))
    }
  }

  React.useEffect(() => {
    dispatch(navigate())
  }, [dispatch])

  return (
    <div className="list">
      {items.map(({ id, left, right, isChanged }) => (
        <div
          key={id}
          data-id={id}
          onClick={onClick}
          className={cn({ paragraph: true, changed: isChanged })}
        >
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
