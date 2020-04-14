import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { IState, IApi } from '@core/types'
import { fail } from '@core/actions'
import configStore from '@core/store'
import App from '@lib/App'

export interface IDocsDiff {
  state?: IState
  target: HTMLElement
  onCreate?: Function
  loadSelects?: Function
  loadList: Function
}

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
