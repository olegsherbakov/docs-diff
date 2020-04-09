import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'

import { IState } from '@core/types'
import system from '@core/reducers/system'
import selects from '@core/reducers/selects'
import list from '@core/reducers/list'

export default function configStore(state: IState): Store<IState> {
  return createStore(
    combineReducers({
      system,
      selects,
      list,
    }),
    state,
    applyMiddleware(thunk)
  )
}
