import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'

import { IState, IApi } from '@core/types'
import system from '@core/reducers/system'
import selects from '@core/reducers/selects'
import list from '@core/reducers/list'
import highlight from '@core/reducers/highlight'
import navigate from '@core/reducers/navigate'
import scroll from '@core/reducers/scroll'

export default function configStore(state: IState, api: IApi): Store<IState> {
  return createStore(
    combineReducers({
      system,
      selects,
      list,
      highlight,
      navigate,
      scroll,
    }),
    state,
    applyMiddleware(thunk.withExtraArgument(api))
  )
}
