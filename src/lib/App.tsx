import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { init } from '@core/actions'
import { selectIsLoading } from '@core/selectors'
import './_styles/reset.scss'
import './_styles/styles.scss'
import Container from '@lib/Container'
import Header from '@lib/Header'
import Progress from '@lib/Progress'
import Footer from '@lib/Footer'
import Errors from '@lib/Errors'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  React.useLayoutEffect(() => {
    dispatch(init())
  }, [])

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
