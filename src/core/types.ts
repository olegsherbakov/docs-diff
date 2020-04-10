export interface IState {
  system: ISystem
  selects: ISelects
  list: IList
  highlight: IHighlight
  navigate: INavigate
}

export interface ISystem {
  isLoading: boolean
  isLoaded: boolean
  error: string
  title: string
  hasLeft: boolean
  hasRight: boolean
}

export interface IOption {
  id: number
  name: string
  isActual: boolean
}

export interface ISelects {
  left: IOption[]
  leftSelected: number
  leftIsActual: boolean
  right: IOption[]
  rightSelected: number
  rightIsActual: boolean
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

export interface IHighlight {
  top: number
  leftHeight: number
  rightHeight: number
}

export interface INavigate {
  id: number
  leftIsActive: boolean
  rightIsActive: boolean
}

export const LOAD = 'LOAD'
export const SUCCESS = 'SUCCESS'
export const FAIL = 'FAIL'
export const NAVIGATE = 'NAVIGATE'
export const RESIZE = 'RESIZE'
export const CHECK = 'CHECK'

interface ILoadAction {
  type: typeof LOAD
  payload: [number, number] | [number, number, [IOption[], IOption[]]]
}

interface ISuccessAction {
  type: typeof SUCCESS
  payload: { items: IParagraph[] }
}

interface IFailAction {
  type: typeof FAIL
  payload: { reason: string }
}

interface INavigateAction {
  type: typeof NAVIGATE
  payload: {
    id: number
    top: number
    leftHeight: number
    rightHeight: number
    leftIsActive: boolean
    rightIsActive: boolean
  }
}

interface IResizeAction {
  type: typeof RESIZE
  payload: {
    width: number
    height: number
  }
}

interface ICheckAction {
  type: typeof CHECK
  payload: {
    width: number
    height: number
  }
}

export type ActionTypes =
  | ILoadAction
  | ISuccessAction
  | IFailAction
  | INavigateAction
  | IResizeAction
  | ICheckAction
