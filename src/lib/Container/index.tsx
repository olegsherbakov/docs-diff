import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectError, selectNavigate } from '@core/selectors'
import { highlight } from '@core/actions'
import { navigateInfo, scrollTo } from '@utils/.'
import Legend from '@lib/Legend'
import List from '@lib/List'
import Highlight from '@lib/Highlight'
import ScrollPanel from '@lib/ScrollPanel'
import './styles.scss'

const Index: React.FC = () => {
  const dispatch = useDispatch()
  const error = useSelector(selectError)
  const { id: navigateId } = useSelector(selectNavigate)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const currentRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    if (currentRef.current) {
      const navigate = navigateInfo(currentRef.current)

      dispatch(highlight(navigate.top, navigate.left, navigate.right))
    }
  }, [dispatch, navigateId])

  React.useLayoutEffect(() => {
    if (navigateId && containerRef.current && currentRef.current) {
      scrollTo(containerRef.current, currentRef.current)
    }
  }, [navigateId])

  if (error) {
    return null
  }

  return (
    <div className="wrapper">
      <div className="container" ref={containerRef}>
        <Legend />
        <Highlight />
        <List ref={currentRef} />
        <ScrollPanel />
      </div>
    </div>
  )
}

export default Index
