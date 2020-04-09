import { Reducer } from 'redux'

import { INIT, LOAD, SUCCESS, ISystem, ActionTypes } from '@core/types'

export const initialState: ISystem = {
  isLoaded: false,
  isLoading: false,
  error: ``,
  title: ``,
  hasLeft: true,
  hasRight: true,
}

const reducer: Reducer<ISystem> = function (
  state: ISystem = initialState,
  action: ActionTypes
) {
  switch (action.type) {
    case INIT: {
      return action.payload
        ? {
          ...state,
          ...action.payload,
        }
        : state
    }
    case LOAD: {
      return { ...state, isLoaded: false, lsLoading: true }
    }
    case SUCCESS: {
      return { ...state, isLoaded: true, lsLoading: false }
    }
  }

  return state
}

export default reducer
