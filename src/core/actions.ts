import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { ACTIONS, IState, IParagraph, IOption, ActionTypes } from '@core/types'
import { changedMap, navigateId, isActive, mockParagraphs } from '@utils/.'

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
      type: ACTIONS.LOAD,
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
  type: ACTIONS.SUCCESS,
  payload: {
    items,
  },
})

export const fail: ActionCreator<ActionTypes> = (reason: string) => ({
  type: ACTIONS.FAIL,
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

export const navigate: ActionCreator<ThunkResult<ActionTypes>> = (
  nextId?: number
) => {
  return function (dispatch, getState) {
    const {
      list: { items },
      navigate: { id: prevId },
    } = getState()

    if (prevId === nextId && prevId !== undefined) {
      return
    }

    const changed = changedMap(items)
    const id = nextId || (changed.length ? changed[0] : undefined)

    if (id === undefined) {
      return
    }

    const [leftIsActive, rightIsActive] = isActive(changed, id)

    return dispatch({
      type: ACTIONS.NAVIGATE,
      payload: {
        id,
        leftIsActive,
        rightIsActive,
      },
    })
  }
}

export const navigatePrev: ActionCreator<ThunkResult<ActionTypes>> = () => {
  return function (dispatch, getState) {
    const {
      list: { items },
      navigate: { id, leftIsActive },
    } = getState()

    if (id !== undefined && leftIsActive && items.length) {
      return dispatch(navigate(navigateId(changedMap(items), id, true)))
    }
  }
}

export const navigateNext: ActionCreator<ThunkResult<ActionTypes>> = () => {
  return function (dispatch, getState) {
    const {
      list: { items },
      navigate: { id, rightIsActive },
    } = getState()

    if (id !== undefined && rightIsActive && items.length) {
      return dispatch(navigate(navigateId(changedMap(items), id)))
    }
  }
}

export const highlight: ActionCreator<ActionTypes> = (
  top: number,
  leftHeight: number,
  rightHeight: number
) => {
  return {
    type: ACTIONS.HIGHLIGHT,
    payload: {
      top,
      leftHeight,
      rightHeight,
    },
  }
}
