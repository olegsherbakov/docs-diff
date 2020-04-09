import { LOAD, SUCCESS, FAIL, IParagraph, ActionTypes } from '@core/types'

export const load = (leftId: number, rightId: number): ActionTypes => ({
  type: LOAD,
  payload: [leftId, rightId],
})

export const success = (items: IParagraph[]): ActionTypes => ({
  type: SUCCESS,
  payload: items,
})

export const fail = (reason: string): ActionTypes => ({
  type: FAIL,
  payload: { reason },
})
