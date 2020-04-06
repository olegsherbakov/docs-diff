import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { DiffState } from '@core/types'
import Container from '@lib/Container'

export default function (options: DiffState, target: HTMLElement): void {
  ReactDOM.render(<Container {...options} />, target)
}
