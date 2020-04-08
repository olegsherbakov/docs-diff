import * as React from 'react'

import { IState } from '@core/types'
import { useSelector } from 'react-redux'

import './styles.scss'

const Index: React.FC = () => {
  const error = useSelector<IState>(({ system: { error } }) => error)

  if (!error) {
    return null
  }

  return (
    <div className="errors l-ta-center">
      <p>Произошла ошибка, попробуйте повторить операцию позже.</p>
    </div>
  )
}

export default Index
