import { IOption, IParagraph, IPosition, INavigateInfo } from '@core/types'

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

export const closestParagraph = (element: HTMLElement): HTMLElement | null => {
  let node: HTMLElement = element

  while (node) {
    if (node.getAttribute('data-paragraph')) {
      return node
    } else {
      node = node.parentElement
    }
  }

  return null
}

export const positionsOfChanged = (container: HTMLDivElement): IPosition[] => {
  const diffs = container.querySelectorAll<HTMLSpanElement>(
    '.list .changed .change, .list .changed .add'
  )
  const scrollStep = container.scrollHeight

  return [...diffs].map((el) => {
    const p = closestParagraph(el)

    return {
      top: (el.offsetTop + p.offsetTop) / scrollStep,
      height: el.offsetHeight / scrollStep,
      className: el.className === 'add' ? 'add' : 'change',
    }
  })
}

export const drawMap = (
  container: HTMLDivElement,
  canvas: HTMLCanvasElement,
  map: IPosition[]
): void => {
  canvas.height = container.offsetHeight

  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')
  const width: number = canvas.width
  const scrollShift: number = canvas.height

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  map.forEach((position) => {
    const top = position.top * scrollShift
    const height = position.height * scrollShift

    ctx.fillStyle = position.className === 'add' ? '#008ebA' : '#4eb276'
    // move rectangle 1px up and increase it height by 2px
    // because we need to paste changed blocks together (without gutter)
    ctx.fillRect(0, top - 1, width, height + 2)
  })
}
