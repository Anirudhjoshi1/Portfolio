import React from 'react'
import './MyProject.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { Style } from '@mui/icons-material'


const handleProjectClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

const MyProject = () => {
  return (
    <div id='project' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img 
                 key={index}
                 src={work.w_img}
                 onClick={()=> handleProjectClick(work.url)} style={{ cursor: "pointer"}}
                 alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyProject