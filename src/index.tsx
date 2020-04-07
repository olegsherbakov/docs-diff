import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { IState } from '@core/types'
import configStore from '@core/store'
import Container from '@lib/Container'

export interface DocsDiff {
  state?: IState
  target: HTMLElement
}

export default function ({ state, target }: DocsDiff): Function {
  const store = configStore(state)

  ReactDOM.render(
    <Provider store={store}>
      <Container />
    </Provider>,
    target
  )

  return function () {
    ReactDOM.unmountComponentAtNode(target)
  }
}
