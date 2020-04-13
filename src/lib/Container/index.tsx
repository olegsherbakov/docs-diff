import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectError, selectNavigate } from '@core/selectors'
import { highlight } from '@core/actions'
import { navigateInfo } from '@utils/.'
import Legend from '@lib/Legend'
import List from '@lib/List'
import Highlight from '@lib/Highlight'
import ScrollPanel from '@lib/ScrollPanel'
import './styles.scss'

const Index: React.FC = () => {
  const dispatch = useDispatch()
  const error = useSelector(selectError)
  const { id: navigateId } = useSelector(selectNavigate)
  const currentRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    if (currentRef.current) {
      const navigate = navigateInfo(currentRef.current)

      dispatch(highlight(navigate.top, navigate.left, navigate.right))
    }
  }, [dispatch, navigateId])

  if (error) {
    return null
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Legend />
        <Highlight />
        <List ref={currentRef} />
        <ScrollPanel />
      </div>
    </div>
  )
}

export default Index
