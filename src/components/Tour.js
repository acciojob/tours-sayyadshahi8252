import React, { useState } from 'react'

const Tour = ({id,name,info,price,image,removeTour}) => {
    const[readmore,setReadmore]=useState(false)
  return (
    <div >
        <img src={image}  />
        <h2 >{name}</h2>
        <h3 >{price}</h3>
        <p>{readmore?info:info.substring(0,200)}</p>
        <button onClick={()=>setReadmore(!readmore)}>
            {readmore?"Show less":"Show more"}
        </button>
          <button onClick={() => removeTour(id)}>Remove</button>
    </div>
  )
}

export default Tour
