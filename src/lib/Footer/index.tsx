import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'

import { selectNavigate } from '@core/selectors'
import { navigatePrev, navigateNext } from '@core/actions'
import './styles.scss'

const Index: React.FC = () => {
  const dispatch = useDispatch()
  const { rightIsActive, leftIsActive } = useSelector(selectNavigate)
  const onClickPrev = (): void => {
    dispatch(navigatePrev())
  }
  const onClickNext = (): void => {
    dispatch(navigateNext())
  }

  return (
    <div className="footer l-ta-center">
      <span
        className={cn({ prev: true, disable: !leftIsActive })}
        onClick={onClickPrev}
      >
        « предыдущее изменение
      </span>
      <span
        className={cn({ next: true, disable: !rightIsActive })}
        onClick={onClickNext}
      >
        следующее изменение »
      </span>
    </div>
  )
}

export default Index
