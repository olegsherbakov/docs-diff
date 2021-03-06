import { Reducer } from 'redux'

import { ACTIONS, ISystem, ActionTypes } from '@core/types'

const initialState: ISystem = {
  redrawIdx: 0,
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
    case ACTIONS.LOAD: {
      return { ...state, isLoaded: false, isLoading: true }
    }
    case ACTIONS.SUCCESS: {
      return { ...state, isLoaded: true, isLoading: false }
    }
    case ACTIONS.FAIL: {
      return {
        ...state,
        isLoaded: false,
        isLoading: false,
        error: action.payload.reason,
      }
    }
    case ACTIONS.UPDATE: {
      return {
        ...state,
        redrawIdx: state.redrawIdx + 1,
      }
    }
  }

  return state
}

export default reducer
