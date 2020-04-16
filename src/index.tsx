import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { IDocsDiff } from '@core/types'
import configStore from '@core/store'
import App from '@lib/App'

export default function ({
  state,
  onCreate,
  loadSelects,
  loadList,
  target,
}: IDocsDiff): Function {
  const store = configStore(state, {
    onCreate: (forceUpdate, navigatePrev, navigateNext) =>
      onCreate(forceUpdate, navigatePrev, navigateNext),
    getSelects: (failFn: Function) => loadSelects(failFn),
    getList: (leftId: number, rightId: number, failFn: Function) =>
      loadList(leftId, rightId, (reason: string) => failFn(reason)),
  })

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    target
  )

  return function () {
    ReactDOM.unmountComponentAtNode(target)
  }
}
