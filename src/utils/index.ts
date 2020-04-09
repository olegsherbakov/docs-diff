import { IOption } from '@core/types'

export const selectsActual = (
  left: IOption[],
  leftSelected: number,
  right: IOption[],
  rightSelected: number
): [boolean, boolean] => [
  left.reduce(
    (result, { id, isActual }) => (id === leftSelected ? isActual : result),
    undefined as boolean
  ),
  right.reduce(
    (result, { id, isActual }) => (id === rightSelected ? isActual : result),
    undefined as boolean
  ),
]
