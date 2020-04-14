import { Reducer } from 'redux'

import { ACTIONS, IScroll, ActionTypes } from '@core/types'

const initialState: IScroll = {
  map: [],
}

const reducer: Reducer<IScroll> = function (
  state: IScroll = initialState,
  action: ActionTypes
) {
  if (action.type === ACTIONS.SCROLLMAP) {
    const map = [...action.payload]

    return { ...state, map }
  }

  return state
}

export default reducer
