import { IState } from '@core/types'

export const selectError = (state: IState) => state.system.error
export const selectIsLoading = (state: IState) => state.system.isLoading
export const selectItems = (state: IState) => state.list.items

export const selectState = (state: IState) => state
