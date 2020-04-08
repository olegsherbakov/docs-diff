import * as React from 'react'

import './_styles/reset.scss'
import './_styles/styles.scss'

import Legend from '@lib/Legend'
import List from '@lib/List'
import Header from '@lib/Header'
import Highlight from '@lib/Highlight'
import Progress from '@lib/Progress'
import ScrollPanel from '@lib/ScrollPanel'
import Footer from '@lib/Footer'
import Errors from '@lib/Errors'

const Container: React.FC = () => {
  return (
    <>
      <div className="container">
        <Legend />
        <List />
        <Highlight />
        <ScrollPanel />
      </div>
      <Header />
      <Progress />
      <Footer />
      <Errors />
    </>
  )
}

export default Container
