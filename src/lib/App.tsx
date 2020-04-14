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

interface IApp {
  hookUpdate: Function
}

const App: React.FC<IApp> = ({ hookUpdate }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const [ignored, forceUpdate] = React.useReducer((x) => x + 1, 0)

  React.useLayoutEffect(() => {
    dispatch(init())

    hookUpdate(() => forceUpdate())
  }, [dispatch])

  if (isLoading) {
    return <Progress />
  }

  return (
    <>
      <Container ignored={ignored} />
      <Header />
      <Footer />
      <Errors />
    </>
  )
}

export default App
