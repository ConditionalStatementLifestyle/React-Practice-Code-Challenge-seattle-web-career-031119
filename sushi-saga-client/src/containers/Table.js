import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    console.log(array.length)
    return array.map((x, index) => {
      console.log('we in map ', x)
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const plates = (x) => {
    let eaten = []
    for (let i=0; i<x; i++) {
      eaten.push(i)
    }
    return eaten
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.cash } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(plates(props.eaten))
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
