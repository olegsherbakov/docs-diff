import { Reducer } from 'redux'

import { INIT, LOAD, SUCCESS, IList, ISystem, ActionTypes } from '@core/types'

export const initialListState: IList = {
  items: [],
}

export const list: Reducer<IList> = function (
  state: IList = initialListState,
  action: ActionTypes
) {
  if (action.type === SUCCESS) {
    const items = { ...action.payload }

    return { ...state, items }
  }

  return state
}

export const initialSystemState: ISystem = {
  isLoaded: false,
  isLoading: false,
  error: ``,
  title: ``,
  hasLeft: true,
  hasRight: true,
}

export const system: Reducer<ISystem> = function (
  state: ISystem = initialSystemState,
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
