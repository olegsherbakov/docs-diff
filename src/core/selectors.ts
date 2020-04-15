import { IState } from '@core/types'

export const selectRedrawIdx = (state: IState) => state.system.redrawIdx
export const selectError = (state: IState) => state.system.error
export const selectIsLoading = (state: IState) => state.system.isLoading
export const selectItems = (state: IState) => state.list.items
export const selectSelects = (state: IState) => state.selects
export const selectHighlight = (state: IState) => state.highlight
export const selectNavigate = (state: IState) => state.navigate
export const selectScroll = (state: IState) => state.scroll
