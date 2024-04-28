import react from 'react'
import img from '../../Assets/video_bg.jpg'

function ChildComp2(props) {
    const {firsthead,headline, textline} = props.dataVideoCont
    return (
        <div className='videosec'>
           
            <div>   
                <p>{firsthead}</p> 
               <h1>{headline}</h1> 
               <p>{textline}</p> 
            </div>
            <div><img second_section src={img}></img></div>
        </div>
    )
}

export default ChildComp2