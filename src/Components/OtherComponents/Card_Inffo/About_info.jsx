import React from 'react'
import './About_info.scss'
const About_info = ({ img, text, number }) => {
    return (
        <div className="contain_info">
            <div className="img_info">

                <img src={img} alt="" />

            </div>
            <div className="text_info">

                <span className='span2' >{number}</span>
                <span> {text}</span>

            </div>
        </div>
    )
}

export default About_info