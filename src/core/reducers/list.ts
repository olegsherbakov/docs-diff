import { Reducer } from 'redux'

import { SUCCESS, IList, ActionTypes } from '@core/types'

export const initialState: IList = {
  items: [],
}

export const reducer: Reducer<IList> = function (
  state: IList = initialState,
  action: ActionTypes
) {
  if (action.type === SUCCESS) {
    const items = [...action.payload]

    return { ...state, items }
  }

  return state
}

export default reducer
