import React from 'react'
import Tour from './Tour'

const Tours = ({tours,remove}) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"10px",padding:"10px"}}>
      <h2>Tours</h2>
      {tours.map((tour)=>(
        <Tour key={tour.id}{...tour} remove={remove} />
      ))}
    </div>
  )
}

export default Tours
