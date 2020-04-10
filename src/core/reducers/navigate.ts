import { Reducer } from 'redux'

import { ACTIONS, INavigate, ActionTypes } from '@core/types'

const initialState: INavigate = {
  id: undefined,
  leftIsActive: false,
  rightIsActive: false,
}

const reducer: Reducer<INavigate> = function (
  state: INavigate = initialState,
  action: ActionTypes
) {
  if (action.type === ACTIONS.NAVIGATE) {
    const { id, leftIsActive, rightIsActive } = action.payload

    return { ...state, id, leftIsActive, rightIsActive }
  }

  return state
}

export default reducer
