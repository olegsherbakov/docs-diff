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

export const isActive = (list: IParagraph[], id: number): [boolean, boolean] =>
  list.reduce(
    (result, { id: Id }, i) => {
      if (id === Id) {
        const leftIsActive = i > 0
        const rightIsActive = i < list.length - 1

        return [leftIsActive, rightIsActive]
      }

      return result
    },
    [false, false]
  )

export const getNextId = (
  list: IParagraph[],
  id: number,
  isPrev?: boolean
): number => {
  return list.reduce((result, { id: Id }, i) => {
    if (Id === id) {
      return isPrev ? list.slice(i - 1)[0].id : list.slice(i + 1)[0].id
    }

    return result
  }, undefined as number)
}

export const mockParagraphs = (): IParagraph[] =>
  mockData.list.map(({ id, left, right, length, changed: isChanged }) => ({
    id,
    isChanged,
    isChecked: true,
    left,
    right,
    length,
  }))
