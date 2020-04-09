import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { load } from '@core/actions'
import { IOption } from '@core/types'
import { selectIsLoading } from '@core/selectors'
import './_styles/reset.scss'
import './_styles/styles.scss'
import Container from '@lib/Container'
import Header from '@lib/Header'
import Progress from '@lib/Progress'
import Footer from '@lib/Footer'
import Errors from '@lib/Errors'

const App: React.FC = () => {
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch()

  React.useLayoutEffect(() => {
    const selects: [IOption[], IOption[]] = [
        [
          {
            id: 1,
            name: `doc1`,
            isActual: false,
          },
          {
            id: 2,
            name: `doc2`,
            isActual: false,
          },
        ],
        [
          {
            id: 3,
            name: `doc3`,
            isActual: true,
          },
          {
            id: 4,
            name: `doc4`,
            isActual: false,
          },
        ],
      ],
      leftId: number = selects[0][0].id,
      rightId: number = selects[1][0].id

    dispatch(load(leftId, rightId, selects))
  }, [dispatch])

  if (isLoading) {
    return <Progress />
  }

  return (
    <>
      <Container />
      <Header />
      <Footer />
      <Errors />
    </>
  )
}

export default App
