import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'

import { selectSelects } from '@core/selectors'
import { change } from '@core/actions'
import styles from './styles/index.scss'

const Index: React.FC = () => {
  const dispatch = useDispatch()
  const {
    left,
    leftSelected,
    leftIsActual,
    right,
    rightSelected,
    rightIsActual,
  } = useSelector(selectSelects)
  const onChange = React.useCallback(
    (event) =>
      dispatch(
        change(!!event.target.getAttribute('data-left'), +event.target.value)
      ),
    [dispatch]
  )

  return (
    <div className={styles.Header}>
      <div
        className={cn({ [styles.Left]: true, [styles.Actual]: leftIsActual })}
      >
        <select value={leftSelected} onChange={onChange} data-left="true">
          {left.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div
        className={cn({ [styles.Right]: true, [styles.Actual]: rightIsActual })}
      >
        <select value={rightSelected} onChange={onChange}>
          {right.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Index
