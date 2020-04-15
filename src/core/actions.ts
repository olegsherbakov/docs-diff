import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import {
  ACTIONS,
  IState,
  IApi,
  IParagraph,
  IOption,
  INavigateInfo,
  ActionTypes,
} from '@core/types'
import { changedMap, navigateId, isActive } from '@utils/.'

type ThunkResult<T> = ThunkAction<T, IState, IApi, ActionTypes>

export const init: ActionCreator<ThunkResult<Promise<ActionTypes>>> = () => {
  return async function (dispatch, getState, api) {
    const [selects, leftId, rightId] = await api.getSelects()

    return dispatch(load(leftId, rightId, selects))
  }
}

export const load: ActionCreator<ThunkResult<Promise<ActionTypes>>> = (
  leftId: number,
  rightId: number,
  selects?: [IOption[], IOption[]]
) => {
  return async function (dispatch, getState, api) {
    await dispatch({
      type: ACTIONS.LOAD,
      payload: [leftId, rightId, selects],
    })

    const paragraphs: IParagraph[] = await api.getList(leftId, rightId)

    return dispatch(success(paragraphs))
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

export const highlight: ActionCreator<ActionTypes> = ({
  top,
  left: leftHeight,
  right: rightHeight,
}: INavigateInfo) => ({
  type: ACTIONS.HIGHLIGHT,
  payload: {
    top,
    leftHeight,
    rightHeight,
  },
})

export const scrollmap: ActionCreator<ActionTypes> = (map) => ({
  type: ACTIONS.SCROLLMAP,
  payload: map,
})

export const forceUpdate: ActionCreator<ActionTypes> = () => ({
  type: ACTIONS.UPDATE,
})
