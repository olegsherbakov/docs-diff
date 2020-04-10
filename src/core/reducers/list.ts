import { Reducer } from 'redux'

import { ACTIONS, IList, ActionTypes } from '@core/types'

const initialState: IList = {
  items: [],
}

const reducer: Reducer<IList> = function (
  state: IList = initialState,
  action: ActionTypes
) {
  if (action.type === ACTIONS.SUCCESS) {
    const items = [...action.payload.items]

    return { ...state, items }
  }

  return state
}

export default reducer
