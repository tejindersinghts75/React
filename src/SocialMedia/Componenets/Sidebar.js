import React from 'react'
import { Nav } from 'react-bootstrap';


function Sidebar() {
  return (
    <div className="sidebarsocial">
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/option1" className='navlinks'>Home</Nav.Link>
      <Nav.Link href="/option2" className='navlinks'>Search</Nav.Link>
      <Nav.Link href="/option3" className='navlinks'>Explore</Nav.Link>
      <Nav.Link href="/option4" className='navlinks'>Message</Nav.Link>
      <Nav.Link href="/option5" className='navlinks'>Notificaiton</Nav.Link>
      <Nav.Link href="/option5" className='navlinks'>Profile</Nav.Link>
    </Nav>
  </div>
  )
}

export default Sidebar