import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'

import { IState } from '@core/types'
import { list, system } from '@core/reducers'

export default function configStore(state: IState): Store<IState> {
  return createStore(
    combineReducers({
      list,
      system,
    }),
    state,
    applyMiddleware(thunk)
  )
}
