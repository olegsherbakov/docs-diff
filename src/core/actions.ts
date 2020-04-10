import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import {
  LOAD,
  SUCCESS,
  FAIL,
  NAVIGATE,
  IState,
  IParagraph,
  IOption,
  ActionTypes,
} from '@core/types'
import { getNextId, isActive, mockParagraphs } from '@utils/.'

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
      }, 1111)
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

export const highlight: ActionCreator<ThunkResult<ActionTypes>> = (
  id?: number
) => {
  return function (dispatch, getState) {
    const {
      list: { items },
      navigate: { id: prevId },
    } = getState()

    if (prevId === id && prevId !== undefined) {
      return
    }

    const nextId = id || (items.length ? items[0].id : undefined)

    if (nextId === undefined) {
      return
    }

    const [leftIsActive, rightIsActive] = isActive(items, nextId)

    return dispatch({
      type: NAVIGATE,
      payload: {
        id: nextId,
        leftIsActive,
        rightIsActive,
        // TODO need calculate it
        top: 159,
        leftHeight: 52,
        rightHeight: 172,
      },
    })
  }
}

export const highlightPrev: ActionCreator<ThunkResult<ActionTypes>> = () => {
  return function (dispatch, getState) {
    const {
      list: { items },
      navigate: { id, leftIsActive },
    } = getState()

    if (id === undefined || !leftIsActive || !items.length) {
      return
    }

    return dispatch(highlight(getNextId(items, id, true)))
  }
}

export const highlightNext: ActionCreator<ThunkResult<ActionTypes>> = () => {
  return function (dispatch, getState) {
    const {
      list: { items },
      navigate: { id, rightIsActive },
    } = getState()

    if (id === undefined || !rightIsActive || !items.length) {
      return
    }

    return dispatch(highlight(getNextId(items, id)))
  }
}
