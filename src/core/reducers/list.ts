import { Reducer } from 'redux'

import { SUCCESS, IList, ActionTypes } from '@core/types'

const initialState: IList = {
  items: [],
}

const reducer: Reducer<IList> = function (
  state: IList = initialState,
  action: ActionTypes
) {
  if (action.type === SUCCESS) {
    const items = [...action.payload.items]

    return { ...state, items }
  }

  return state
}

export default reducer
