import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { IState, IParagraph } from '@core/types'
import configStore from '@core/store'
import App from '@lib/App'

import { load, success, fail } from '@core/actions'

export interface DocsDiff {
  state?: IState
  target: HTMLElement
}

export default function ({ state, target }: DocsDiff): Function {
  const store = configStore(state)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    target
  )

  const leftId = 0, rightId = 0

  store.dispatch(load(leftId, rightId))

  setTimeout(() => {
    const paragraphs: IParagraph[] = [
      {
        id: 0,
        left: `left`,
        right: `right`,
        length: 111,
        isChanged: false,
        isChecked: false,
      },
    ]

    store.dispatch(success(paragraphs))
  }, 3000)

  setTimeout(() => {
    const reason = `why not?`

    store.dispatch(fail(reason))
  }, 10000)

  return function () {
    ReactDOM.unmountComponentAtNode(target)
  }
}
