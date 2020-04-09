import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'

import { selectSelects } from '@core/selectors'
import { change } from '@core/actions'
import './styles/index.scss'

const Index: React.FC = () => {
  const {
    left,
    leftSelected,
    leftIsActual,
    right,
    rightSelected,
    rightIsActual,
  } = useSelector(selectSelects)
  const dispatch = useDispatch()
  const onChange = React.useCallback(
    event => dispatch(
      change(!!event.target.getAttribute('data-left'), +event.target.value)
    ),
    [dispatch]
  )

  return (
    <div className="header clear">
      <div className={cn({ left: true, actual: leftIsActual })}>
        <select value={leftSelected} onChange={onChange} data-left="true">
          {left.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className={cn({ right: true, actual: rightIsActual })}>
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
