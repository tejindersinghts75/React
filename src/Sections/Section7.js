import React from 'react'
import Facecard from '../Components/FaceCard/Facecard'
import img from '../Assets/team_emma_scott-297x297.jpg'

function Section7() {
    const content = [
        { image: img },
        { image: img },
        { image: img }
    ]
    return (
        <div className='second_section'>
            {content.map((index) => <Facecard {...index} />)}

        </div>
    )
}

export default Section7