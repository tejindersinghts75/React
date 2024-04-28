import React from 'react'
import ChildComp2 from '../Components/ChildComp2/ChildComp2'

function Section3() {
    const videocontent = {
        firsthead: "For Business",
        headline: "We Are The Best Support for You",
        textline: "You can call our highly experienced clinical team if your child, teenager or family is going through difficulties."
      }
  return (
    <div>
         <ChildComp2 dataVideoCont={videocontent}/>
    </div>
  )
}

export default Section3