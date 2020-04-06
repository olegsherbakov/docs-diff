import * as React from 'react'

import { useSelector, useDispatch } from 'react-redux'

function Canvas(): JSX.Element {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const onClick = React.useCallback(() => {
    dispatch({
      type: `TYPE`,
      payload: {
        ...state,
      },
    })
  }, [])

  // TODO dev
  console.log(`Canvas #render`)
  console.log(`?state`, state)

  return (
    <>
      Canvas! <br />
      <button type="button" onClick={onClick}>
        click me
      </button>
    </>
  )
}

export default Canvas
