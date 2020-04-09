import * as React from 'react'
import { useSelector } from 'react-redux'

import { selectIsLoading } from '@core/selectors'

import './styles.scss'

const Index: React.FC = () => {
  const isLoading = useSelector(selectIsLoading)

  if (!isLoading) {
    return null
  }

  return (
    <div className="progress l-ta-center">
      <p>
        <span className="label"> Выполняется сравнение текстов редакций</span>
      </p>
      <p>
        В больших текстах (например, при сравнении редакций Кодексов РФ) эта
        операция может выполняться
        <br />
        длительное время, в течение которого окно программы может перестать
        реагировать на запросы.
      </p>
      <p>
        Пожалуйста, не закрывайте окно и дождитесь окончания выполнения
        операции.
      </p>
    </div>
  )
}

export default Index
