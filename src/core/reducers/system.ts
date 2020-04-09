import { Reducer } from 'redux'

import { LOAD, SUCCESS, FAIL, ISystem, ActionTypes } from '@core/types'

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
    case LOAD: {
      return { ...state, isLoaded: false, isLoading: true }
    }
    case SUCCESS: {
      return { ...state, isLoaded: true, isLoading: false }
    }
    case FAIL: {
      return {
        ...state,
        isLoaded: false,
        isLoading: false,
        error: action.payload.reason,
      }
    }
  }

  return state
}

export default reducer
