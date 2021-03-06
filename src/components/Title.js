import React from 'react'
import { ToursContainer } from '../containers/ToursContainer'
import { Container } from 'react-bootstrap'

export const Title = ({text}) => {
  return (
    <Container>
        <h2 className='titleMain'>{text}</h2>
        <ToursContainer/>
    </Container>
  )
}
