import { IOption, IParagraph } from '@core/types'

import mockData from '../data.json'

export const isActual = (
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

export const isActive = (
  list: IParagraph[],
  currentId: number
): [boolean, boolean] =>
  list.reduce(
    (result, { id }, i) =>
      id === currentId ? [i > 0, i < list.length - 1] : result,
    [false, false]
  )

export const navigateId = (
  list: IParagraph[],
  currentId: number,
  isPrev?: boolean
): number =>
  list.reduce(
    (result, { id }, i) =>
      id === currentId
        ? isPrev
          ? list.slice(i - 1)[0].id
          : list.slice(i + 1)[0].id
        : result,
    undefined as number
  )

export const mockParagraphs = (): IParagraph[] =>
  mockData.list.map(({ id, left, right, length, changed: isChanged }) => ({
    id,
    isChanged,
    isChecked: true,
    left,
    right,
    length,
  }))
