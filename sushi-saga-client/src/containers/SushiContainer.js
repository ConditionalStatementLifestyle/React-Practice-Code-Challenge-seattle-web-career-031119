import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.fourSushis.map( (sushi, index) => {
          return <Sushi
            sushi={sushi}
            clickSushi={props.clickSushi}
            eaten={sushi.eaten}
            index={index}
          />
        })
        }
        <MoreButton onMoreSushi={props.onMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer


// <Sushi SushiStuff={sushi}/>
// props.fourSushis.map(sushi => {
//   console.log(sushi)
//  <Sushi sushi={sushi}/>
