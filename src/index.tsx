import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { IState } from '@core/types'
import configStore from '@core/store'
import App from '@lib/App'

export interface DocsDiff {
  state?: IState
  target: HTMLElement
  onCreate?: Function
}

export default function ({ state, onCreate, target }: DocsDiff): Function {
  let destroyFn: Function | undefined
  const store = configStore(state)
  const hookUpdate = (forceUpdate: Function): void => {
    destroyFn = onCreate(forceUpdate)
  }

  ReactDOM.render(
    <Provider store={store}>
      <App hookUpdate={hookUpdate} />
    </Provider>,
    target
  )

  return function () {
    if (destroyFn) {
      destroyFn(target)
    }

    ReactDOM.unmountComponentAtNode(target)
  }
}
