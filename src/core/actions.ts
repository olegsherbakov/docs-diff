import { INIT, LOAD, IState, ActionTypes } from '@core/types'

export const init = (state: IState | undefined): ActionTypes => ({
  type: INIT,
  payload: state,
})

export const load = (leftId: number, rightId: number): ActionTypes => ({
  type: LOAD,
  payload: [leftId, rightId],
})
