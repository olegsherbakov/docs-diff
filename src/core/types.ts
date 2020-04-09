export interface IState {
  system: ISystem
  list: IList
}

export interface ISystem {
  isLoading: boolean
  isLoaded: boolean
  error: string
  title: string
  hasLeft: boolean
  hasRight: boolean
}

export interface IList {
  items: IParagraph[]
}

export interface IParagraph {
  id: number
  left: string
  right: string
  length: number
  isChanged: boolean
  isChecked: boolean
}

export const INIT = 'INIT'
export const LOAD = 'LOAD'
export const SUCCESS = 'SUCCESS'
export const FAIL = 'FAIL'
export const NAVIGATE = 'NAVIGATE'
export const RESIZE = 'RESIZE'
export const CHECK = 'CHECK'

interface IInitAction {
  type: typeof INIT
  payload: IState | undefined
}

interface ILoadAction {
  type: typeof LOAD
  payload: [number, number]
}

interface ISuccessAction {
  type: typeof SUCCESS
  payload: IParagraph[]
}

interface IFailAction {
  type: typeof FAIL
  payload: { reason: string }
}

interface INavigateToMatchAction {
  type: typeof NAVIGATE
  payload: { id: string }
}

interface IResizeAction {
  type: typeof RESIZE
  payload: { width: number; height: number }
}

interface ICheckAction {
  type: typeof CHECK
  payload: { width: number; height: number }
}

export type ActionTypes =
  | IInitAction
  | ILoadAction
  | ISuccessAction
  | IFailAction
  | INavigateToMatchAction
  | IResizeAction
  | ICheckAction
