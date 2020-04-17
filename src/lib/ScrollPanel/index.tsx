import * as React from 'react'
import { useSelector } from 'react-redux'

import { selectScroll } from '@core/selectors'
import { drawMap } from '@utils/.'
import Bar from './Bar'
import styles from './styles.scss'

const Index: React.FC = () => {
  const { map } = useSelector(selectScroll)
  const refScroll = React.useRef<HTMLDivElement>(null)
  const refCanvas = React.useRef<HTMLCanvasElement>(null)

  React.useLayoutEffect(() => {
    if (refScroll.current && refCanvas.current && map.length) {
      drawMap(refScroll.current, refCanvas.current, map)
    }
  }, [map])

  return (
    <div className={styles.Scroll} ref={refScroll}>
      <canvas ref={refCanvas} />
      <Bar />
    </div>
  )
}

export default Index
