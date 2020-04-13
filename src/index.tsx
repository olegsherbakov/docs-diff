import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { IState } from '@core/types'
import configStore from '@core/store'
import App from '@lib/App'

export interface DocsDiff {
  state?: IState
  target: HTMLElement
  useResize?: Function
}

export default function ({ state, useResize, target }: DocsDiff): Function {
  const store = configStore(state)

  ReactDOM.render(
    <Provider store={store}>
      <App useResize={useResize} />
    </Provider>,
    target
  )

  return function () {
    ReactDOM.unmountComponentAtNode(target)
  }
}
