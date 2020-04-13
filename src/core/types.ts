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

export enum ACTIONS {
  LOAD,
  SUCCESS,
  FAIL,
  NAVIGATE,
  RESIZE,
  CHECK,
  HIGHLIGHT,
}

interface ILoadAction {
  type: typeof ACTIONS.LOAD
  payload: [number, number] | [number, number, [IOption[], IOption[]]]
}

interface ISuccessAction {
  type: typeof ACTIONS.SUCCESS
  payload: { items: IParagraph[] }
}

interface IFailAction {
  type: typeof ACTIONS.FAIL
  payload: { reason: string }
}

interface INavigateAction {
  type: typeof ACTIONS.NAVIGATE
  payload: {
    id: number
    leftIsActive: boolean
    rightIsActive: boolean
  }
}

interface IHighlightAction {
  type: typeof ACTIONS.HIGHLIGHT
  payload: {
    top: number
    leftHeight: number
    rightHeight: number
  }
}

interface IResizeAction {
  type: typeof ACTIONS.RESIZE
  payload: {
    width: number
    height: number
  }
}

interface ICheckAction {
  type: typeof ACTIONS.CHECK
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
  | IHighlightAction
  | IResizeAction
  | ICheckAction
