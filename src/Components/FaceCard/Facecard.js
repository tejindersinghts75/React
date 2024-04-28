import React from 'react'

function Facecard(props) {
    const {image} =props
  return (
    <div>
        <img src={image}/>
    </div>
  )
}

export default Facecard