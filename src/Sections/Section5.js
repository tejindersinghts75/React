import React from 'react'
import img1 from '../Assets/home_bg1-1.jpg'
import ChildComp3 from '../Components/ChildComp3/ChildComp3'

function Section5() {

    const ttcontentedata =[
        {
            firsthead:"Couple Therapy",
            textline:"Couples’ therapy is a form of therapy in which a couple works with a therapist",
            image:img1,
        },
        {
            firsthead:"Couple Therapy",
            textline:"Couples’ therapy is a form of therapy in which a couple works with a therapist",
            image:img1,
        },
        {
            firsthead:"Couple Therapy",
            textline:"Couples’ therapy is a form of therapy in which a couple works with a therapist",
            image:img1,
        }
    ]
  return ( 
    <div className='second_section'>
        {ttcontentedata.map((el)=><ChildComp3 {...el}/>)}
    </div>
  )
}

export default Section5