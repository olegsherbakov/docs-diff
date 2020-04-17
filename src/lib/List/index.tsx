import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'

import { navigate } from '@core/actions'
import { selectItems, selectNavigate } from '@core/selectors'
import { isMark } from '@utils/.'
import styles from './styles.scss'

const Index = React.forwardRef<HTMLDivElement>((props, ref) => {
  const dispatch = useDispatch()
  const items = useSelector(selectItems)
  const { id: navigateId } = useSelector(selectNavigate)
  const onClick = (event: React.SyntheticEvent<EventTarget>): void => {
    if (isMark(event.target as HTMLElement)) {
      const currentTarget = event.currentTarget as HTMLElement

      dispatch(navigate(+currentTarget.getAttribute('data-id')))
    }
  }

  React.useLayoutEffect(() => {
    dispatch(navigate())
  }, [])

  return (
    <div className={styles.List}>
      {items.map(({ id, left, right, isChanged }) => (
        <div
          key={id}
          data-id={id}
          data-paragraph={true}
          onClick={onClick}
          className={cn({
            [styles.Paragraph]: true,
            [styles.Changed]: isChanged,
          })}
          ref={navigateId === id ? ref : undefined}
        >
          <div
            className={styles.Left}
            dangerouslySetInnerHTML={{
              __html: left,
            }}
          />
          <div
            className={styles.Right}
            dangerouslySetInnerHTML={{
              __html: right,
            }}
          />
          <div className={styles.Clear} />
        </div>
      ))}
    </div>
  )
})

export default Index
