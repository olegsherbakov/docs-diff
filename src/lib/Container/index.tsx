import * as React from 'react'
import { useSelector } from 'react-redux'

import { selectError } from '@core/selectors'
import Legend from '@lib/Legend'
import List from '@lib/List'
import Highlight from '@lib/Highlight'
import ScrollPanel from '@lib/ScrollPanel'
import './styles.scss'

const Index: React.FC = () => {
  const error = useSelector(selectError)

  if (error) {
    return null
  }

  return (
    <div className="container">
      <Legend />
      <List />
      <Highlight />
      <ScrollPanel />
    </div>
  )
}

export default Index
