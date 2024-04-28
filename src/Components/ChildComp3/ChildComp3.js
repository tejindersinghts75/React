import React from 'react'

function ChildComp3(props) {
    const{firsthead, textline, image} = props
  return (
    <div className=''>
        <p>{firsthead}</p>
        <h1>{textline}</h1>
        <img style={{width:"100%"}} src={image}/>
    </div>
  )
}

export default ChildComp3