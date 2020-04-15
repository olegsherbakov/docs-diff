import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { IDocsDiff, IApi } from '@core/types'
import configStore from '@core/store'
import App from '@lib/App'

export default function ({
  state,
  onCreate,
  loadSelects,
  loadList,
  target,
}: IDocsDiff): Function {
  let destroyFn: Function | undefined
  const api: IApi = {
    onCreate: (forceUpdate, navigatePrev, navigateNext) => {
      destroyFn = onCreate(forceUpdate, navigatePrev, navigateNext)
    },
    getSelects: (failFn: Function) => loadSelects(failFn),
    getList: (leftId: number, rightId: number, failFn: Function) =>
      loadList(leftId, rightId, (reason: string) => failFn(reason)),
  }
  const store = configStore(state, api)

  ReactDOM.render(
    <Provider store={store}>
      <App />
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
