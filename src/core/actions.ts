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
import { mockParagraphs } from '@utils/.'

type ThunkResult<T> = ThunkAction<T, IState, undefined, ActionTypes>

export const init: ActionCreator<ThunkResult<Promise<ActionTypes>>> = () => {
  return function (dispatch) {
    // TODO API mock
    const selects: [IOption[], IOption[]] = [
        [
          {
            id: 1,
            name: `doc1`,
            isActual: false,
          },
          {
            id: 2,
            name: `doc2`,
            isActual: false,
          },
        ],
        [
          {
            id: 3,
            name: `doc3`,
            isActual: true,
          },
          {
            id: 4,
            name: `doc4`,
            isActual: false,
          },
        ],
      ],
      leftId: number = selects[0][0].id,
      rightId: number = selects[1][0].id

    return dispatch(load(leftId, rightId, selects))
  }
}

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
    return new Promise((resolve) => {
      setTimeout(() => {
        const paragraphs: IParagraph[] = mockParagraphs()

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
