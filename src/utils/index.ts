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

export const changedMap = (items: IParagraph[]): number[] =>
  items.reduce((r, p) => {
    if (p.isChanged) {
      r.push(p.id)
    }

    return r
  }, [])

export const isActive = (
  list: number[],
  currentId: number
): [boolean, boolean] =>
  list.reduce(
    (result, id, i) =>
      id === currentId ? [i > 0, i < list.length - 1] : result,
    [false, false]
  )

export const navigateId = (
  list: number[],
  currentId: number,
  isPrev?: boolean
): number =>
  list.reduce(
    (result, id, i) =>
      id === currentId
        ? isPrev
          ? list.slice(i - 1)[0]
          : list.slice(i + 1)[0]
        : result,
    undefined as number
  )

interface INavigateInfo {
  top: number
  left: number
  right: number
}

// TODO dev
export const navigateInfo = (div: HTMLDivElement): INavigateInfo => {
  const leftElement = div.childNodes[0] as HTMLDivElement
  const left = leftElement ? leftElement.clientHeight : undefined
  const rightElement = div.childNodes[1] as HTMLDivElement
  const right = rightElement ? rightElement.clientHeight : undefined
  const top = div.offsetTop

  return {
    top,
    left,
    right,
  }
}

export const scrollTo = (
  container: HTMLDivElement,
  current: HTMLDivElement
): void => {
  const offset = Math.max(
    0,
    current.offsetTop - Math.floor(container.clientHeight / 4)
  )

  if (container.scrollTop !== offset) {
    requestAnimationFrame(() => {
      container.scrollTop = offset
    })
  }
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
