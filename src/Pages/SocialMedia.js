import React from 'react'
import Sidebar from '../SocialMedia/Componenets/Sidebar'
import RightSidebar from '../SocialMedia/Componenets/RightSidebar'
import ContainerSocialMedia from '../SocialMedia/Componenets/ContainerSocialMedia'

function SocialMedia() {
  return (
    <div  className='socialmediacont'>
        <Sidebar/>
        <ContainerSocialMedia/>
        <RightSidebar/>
    </div>
  )
}

export default SocialMedia