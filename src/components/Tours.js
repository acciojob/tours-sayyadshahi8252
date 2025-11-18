import React from 'react'
import Tour from './Tour'

const Tours = ({tours,removeTour}) => {
  return (
    <div >
      <h2>Tours</h2>
      {tours.map((tour)=>(
        <Tour key={tour.id}{...tour} removeTour={removeTour} />
      ))}
    </div>
  )
}

export default Tours
