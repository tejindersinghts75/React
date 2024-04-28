import React from 'react'
import ChildComp4 from '../Components/ChildComp4/ChildComp4'

function Section6() {
    const videocontent = {
        firsthead: "For Business",
        headline: "We Are The Best Support for You",
        textline: "You can call our highly experienced clinical team if your child, teenager or family is going through difficulties."
      }
  return (
    <div>
        <ChildComp4 dataVideoCont={videocontent}/>
    </div>
  )
}

export default Section6
