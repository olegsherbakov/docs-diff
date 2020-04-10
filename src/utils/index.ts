import { IOption, IParagraph } from '@core/types'

import mockData from '../data.json'

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

export const mockParagraphs = (): IParagraph[] =>
  mockData.list.map(({ id, left, right, length, changed: isChanged }) => ({
    id,
    isChanged,
    isChecked: true,
    left,
    right,
    length,
  }))
