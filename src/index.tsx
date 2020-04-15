import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { IDocsDiff, IApi } from '@core/types'
import { navigatePrev, forceUpdate, navigateNext, fail } from '@core/actions'
import configStore from '@core/store'
import App from '@lib/App'

const createApi = (
  loadSelects: Function,
  loadList: Function,
  onFail: Function
): IApi => {
  return {
    getSelects: () => loadSelects(onFail),
    getList: (leftId: number, rightId: number) =>
      loadList(leftId, rightId, (reason: string) => onFail(reason)),
  }
}

export default function ({
  state,
  onCreate,
  loadSelects,
  loadList,
  target,
}: IDocsDiff): Function {
  let destroyFn: Function | undefined
  const api = createApi(loadSelects, loadList, (reason: string) =>
    store.dispatch(fail(reason))
  )
  const store = configStore(state, api)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    target
  )

  if (onCreate) {
    destroyFn = onCreate(
      () => store.dispatch(forceUpdate()),
      // @ts-ignore
      () => store.dispatch(navigatePrev()),
      // @ts-ignore
      () => store.dispatch(navigateNext())
    )
  }

  return function () {
    if (destroyFn) {
      destroyFn(target)
    }

    ReactDOM.unmountComponentAtNode(target)
  }
}
