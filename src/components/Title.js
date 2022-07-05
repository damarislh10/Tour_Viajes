import React from 'react'
import { ToursContainer } from '../containers/ToursContainer'

export const Title = ({text}) => {
  return (
    <div>
        <h2>{text}</h2>
        <ToursContainer/>
    </div>
  )
}
