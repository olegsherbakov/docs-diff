import {
  createStore,
  combineReducers,
  applyMiddleware,
  Store,
  Action,
  Reducer,
} from 'redux'
import thunk from 'redux-thunk'

import { DiffState, BaseState } from '@core/types'
import { sum } from '@utils/math'

export const initialState: BaseState = {
  title: ``,
  hasLeft: false,
  hasRight: false,
  list: [],
  onScroll: new Function(),
}

const view: Reducer<BaseState> = function (
  state: BaseState = initialState,
  action: Action
) {
  // TODO dev
  console.log(`******base view reducer call`)
  console.log(`?state`, state)
  console.log(`?action`, action)
  console.log(`#sum`, sum(1, 2))

  return state
}

export default function configStore(initialState: DiffState): Store<DiffState> {
  return createStore(
    combineReducers({
      view,
    }),
    initialState,
    applyMiddleware(thunk)
  )
}
