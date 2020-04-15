import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  selectRedrawIdx,
  selectError,
  selectNavigate,
  selectItems,
} from '@core/selectors'
import { highlight, scrollmap } from '@core/actions'
import { navigateInfo, scrollTo, positionsOfChanged } from '@utils/.'
import Legend from '@lib/Legend'
import List from '@lib/List'
import Highlight from '@lib/Highlight'
import ScrollPanel from '@lib/ScrollPanel'
import './styles.scss'

const Index: React.FC = () => {
  const dispatch = useDispatch()
  const redrawIdx = useSelector(selectRedrawIdx)
  const error = useSelector(selectError)
  const items = useSelector(selectItems)
  const { id } = useSelector(selectNavigate)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const currentRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    if (currentRef.current) {
      dispatch(highlight(navigateInfo(currentRef.current)))
    }
  }, [id, redrawIdx])

  React.useLayoutEffect(() => {
    if (id && containerRef.current && currentRef.current) {
      scrollTo(containerRef.current, currentRef.current)
    }
  }, [id])

  React.useLayoutEffect(() => {
    if (items.length) {
      dispatch(scrollmap(positionsOfChanged(containerRef.current)))
    }
  }, [items, redrawIdx])

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
