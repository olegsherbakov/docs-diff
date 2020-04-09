import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import {
  LOAD,
  SUCCESS,
  FAIL,
  IState,
  IParagraph,
  IOption,
  ActionTypes,
} from '@core/types'

type ThunkResult<T> = ThunkAction<T, IState, undefined, ActionTypes>

export const load: ActionCreator<ThunkResult<Promise<ActionTypes>>> = (
  leftId: number,
  rightId: number,
  selects?: [IOption[], IOption[]]
) => {
  return async function (dispatch) {
    await dispatch({
      type: LOAD,
      payload: [leftId, rightId, selects],
    })

    // TODO API mock
    console.log(`#load`)

    return new Promise((resolve) => {
      setTimeout(() => {
        const paragraphs: IParagraph[] = [
          {
            id: 0,
            left: `left`,
            right: `right`,
            length: 111,
            isChanged: false,
            isChecked: false,
          },
        ]

        console.log(`#success`)

        return resolve(dispatch(success(paragraphs)))
      }, 3000)
    })
  }
}

export const success: ActionCreator<ActionTypes> = (items: IParagraph[]) => ({
  type: SUCCESS,
  payload: {
    items,
  },
})

export const fail: ActionCreator<ActionTypes> = (reason: string) => ({
  type: FAIL,
  payload: { reason },
})

export const change: ActionCreator<ThunkResult<Promise<ActionTypes>>> = (
  isLeft: boolean,
  id: number
) => {
  return function (dispatch, getState) {
    const {
      selects: { leftSelected, rightSelected },
    } = getState()
    const [leftId, rightId]: [number, number] = isLeft
      ? [id, rightSelected]
      : [leftSelected, id]

    return dispatch(load(leftId, rightId))
  }
}
