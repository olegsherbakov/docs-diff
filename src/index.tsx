import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { IState, IOption } from '@core/types'
import configStore from '@core/store'
import App from '@lib/App'

import { load, fail } from '@core/actions'

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

  // TODO dev test
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

  store.dispatch(load(leftId, rightId, selects))

  setTimeout(() => {
    const reason = `why not?`

    store.dispatch(fail(reason))
  }, 99000)

  return function () {
    ReactDOM.unmountComponentAtNode(target)
  }
}
