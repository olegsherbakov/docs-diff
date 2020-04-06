import * as React from 'react'
import { Provider } from 'react-redux'

import { DiffState } from '@core/types'
import configStore from '@core/store'
import Canvas from '@lib/Canvas'

function Container(initialState: DiffState): JSX.Element {
  const store = configStore(initialState)

  return (
    <Provider store={store}>
      <Canvas />
    </Provider>
  )
}

export default Container
