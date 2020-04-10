import { Reducer } from 'redux'

import { NAVIGATE, IHighlight, ActionTypes } from '@core/types'

const initialState: IHighlight = {
  top: undefined,
  leftHeight: undefined,
  rightHeight: undefined,
}

const reducer: Reducer<IHighlight> = function (
  state: IHighlight = initialState,
  action: ActionTypes
) {
  if (action.type === NAVIGATE) {
    const { top, leftHeight, rightHeight } = action.payload

    return { ...state, top, leftHeight, rightHeight }
  }

  return state
}

export default reducer
