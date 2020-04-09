import * as React from 'react'
import { useSelector } from 'react-redux'

import { selectError } from '@core/selectors'
import './styles.scss'

const Index: React.FC = () => {
  const error = useSelector(selectError)

  if (!error) {
    return null
  }

  return (
    <div className="errors l-ta-center">
      <p>Произошла ошибка, попробуйте повторить операцию позже.</p>
      <p>{error}</p>
    </div>
  )
}

export default Index
