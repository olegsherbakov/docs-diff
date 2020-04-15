import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'

import { navigate } from '@core/actions'
import { selectItems, selectNavigate } from '@core/selectors'
import './styles.scss'

const Index = React.forwardRef<HTMLDivElement>((props, ref) => {
  const dispatch = useDispatch()
  const items = useSelector(selectItems)
  const { id: navigateId } = useSelector(selectNavigate)
  const onClick = (event: React.SyntheticEvent<EventTarget>): void => {
    const target = event.target as HTMLElement
    const currentTarget = event.currentTarget as HTMLElement
    const id = +currentTarget.getAttribute('data-id')

    if (target.tagName === 'SPAN' && /^change|add$/.test(target.className)) {
      dispatch(navigate(id))
    }
  }

  React.useLayoutEffect(() => {
    dispatch(navigate())
  }, [])

  return (
    <div className="list">
      {items.map(({ id, left, right, isChanged }) => (
        <div
          key={id}
          data-id={id}
          data-paragraph={true}
          onClick={onClick}
          className={cn({ paragraph: true, changed: isChanged })}
          ref={navigateId === id ? ref : undefined}
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
})

export default Index
