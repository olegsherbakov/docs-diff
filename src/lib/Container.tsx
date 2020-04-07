import * as React from 'react'

import Legend from '@lib/Legend'
import List from '@lib/List'
import Header from '@lib/Header'
import HighlightLayer from '@lib/HighlightLayer'
import ScrollPanel from '@lib/ScrollPanel'
import Footer from '@lib/Footer'

const Container: React.FC = () => {
  return (
    <>
      <Legend />
      <List />
      <HighlightLayer />
      <Header />
      <ScrollPanel />
      <Footer />
    </>
  )
}

export default Container
