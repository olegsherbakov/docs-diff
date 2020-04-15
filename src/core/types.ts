export interface IDocsDiff {
  state?: IState
  target: HTMLElement
  onCreate?: Function
  loadSelects?: Function
  loadList: Function
}

export interface IState {
  system: ISystem
  selects: ISelects
  list: IList
  highlight: IHighlight
  navigate: INavigate
  scroll: IScroll
}

export interface ISystem {
  redrawIdx: number
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

export interface IScroll {
  map: IPosition[]
}

export interface IPosition {
  top: number
  height: number
  className: 'add' | `change`
}

export interface INavigateInfo {
  top: number
  left: number
  right: number
}

export enum ACTIONS {
  LOAD,
  SUCCESS,
  FAIL,
  NAVIGATE,
  CHECK,
  HIGHLIGHT,
  SCROLLMAP,
  UPDATE,
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

interface IScrollmapAction {
  type: typeof ACTIONS.SCROLLMAP
  payload: IPosition[]
}

interface IUpdateAction {
  type: typeof ACTIONS.UPDATE
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
  | IScrollmapAction
  | IUpdateAction
  | ICheckAction

export interface IApi extends Object {
  getSelects(): Promise<[[IOption[], IOption[]], number, number]>
  getList(leftId: number, rightId: number): Promise<IParagraph[]>
}
