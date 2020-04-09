import { Reducer } from 'redux'

import { LOAD, ISelects, ActionTypes } from '@core/types'
import { selectsActual } from '@utils/.'

const initialState: ISelects = {
  left: [],
  leftSelected: undefined,
  leftIsActual: undefined,
  right: [],
  rightSelected: undefined,
  rightIsActual: undefined,
}

const reducer: Reducer<ISelects> = function (
  state: ISelects = initialState,
  action: ActionTypes
) {
  if (action.type === LOAD) {
    const [leftSelected, rightSelected, selects] = action.payload

    if (selects) {
      const [left, right] = selects
      const [leftIsActual, rightIsActual] = selectsActual(
        left,
        leftSelected,
        right,
        rightSelected
      )

      return {
        ...state,
        left,
        leftSelected,
        leftIsActual,
        right,
        rightSelected,
        rightIsActual,
      }
    }

    const [leftIsActual, rightIsActual] = selectsActual(
      state.left,
      leftSelected,
      state.right,
      rightSelected
    )

    return {
      ...state,
      leftSelected,
      leftIsActual,
      rightSelected,
      rightIsActual,
    }
  }

  return state
}

export default reducer
