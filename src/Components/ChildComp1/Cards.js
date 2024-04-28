import React from 'react'

function Cards(props) {
    const{firsthead, textline, bulletpoint } = props
  return (
    <div style={{padding:"40px", display:"flex", flexDirection:"column", alignItems:"start" }}>
        <p>{firsthead}</p>
        <p style={{textAlign:"left  "}}>{textline}</p>
        {bulletpoint.map((el,index)=>(
            <p key={index}>{el}</p>
        ))}
    </div>
  )
}

export default Cards