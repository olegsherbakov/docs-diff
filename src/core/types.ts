export interface DiffState {
  view: BaseState
}

export declare type Paragraph = {
  id: number
  changed: boolean
  checked: boolean
  left: string
  right: string
  length: number
}

export declare type BaseState = {
  onScroll: Function
  list: Array<Paragraph>
  hasLeft: boolean
  hasRight: boolean
  title: string | null
}
