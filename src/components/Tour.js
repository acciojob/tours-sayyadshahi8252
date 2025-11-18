import React, { useState } from 'react'

const Tour = ({id,name,info,price,image,remove}) => {
    const[readmore,setReadmore]=useState(false)
  return (
    <div style={{border:"2px solid black",width:"500px",heigh:"500px",padding:"10px"}}>
        <img src={image} style={{width:"100%",heigh:"100%"}} />
        <h2 style={{textAlign:"center"}}>{name}</h2>
        <h3 style={{textAlign:"center"}}>{price}</h3>
        <p>{readmore?info:info.substring(0,200)}...</p>
        <button onClick={()=>setReadmore(!readmore)}>
            {readmore?"Show less":"Show more"}
        </button>
          <button onClick={() => remove(id)}>Not Interested</button>
    </div>
  )
}

export default Tour
