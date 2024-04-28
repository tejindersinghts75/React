import React from 'react'
import '../App.css'
import Button from './Button'
function Header(props) {

    const button ={buttonname:"AboutUs"}

  return (
    <div>
        <div className='container_header'>
          <div className='container'>
          <div className='first_div'>
            <p style={{color:"white"}} >{props.contenthead[0].smallhead }</p>
            <p style={{fontSize:"42px", textAlign:"left", color:"white", fontWeight:'700'}}>{props.contenthead[1].mainhead }</p>
            <div ><Button buttonname={button}/></div>
            </div>
          <div className='first_div'>  
          </div>
            </div>
        </div>
    </div>
  )
}

export default Header