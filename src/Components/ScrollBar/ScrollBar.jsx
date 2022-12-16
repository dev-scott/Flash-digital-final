import React from 'react'
import './ScrollBar.scss'

const ScrollBar = () => {
    return (
        <div className="contain_scrollbar">

            <button className="btn_scrollbar_top">
                ↑
            </button>

            <div className="scrollbar_child">

            </div>
            <div className="scrollbar_parent">

            </div>
            <button className='btn_scrollbar_bottom'>

                ↓

            </button>


        </div>
    )
}

export default ScrollBar