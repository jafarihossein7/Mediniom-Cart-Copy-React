import React, { useState } from 'react'
import MoreInfoIcon from '../../SVG/MoreInfoIcon'

export default function MoreInfo({ title, detail }) {
    const [toggleMoreInfo, settoggleMoreInfo] = useState(false)
    function handleToggleInfo() {
        settoggleMoreInfo(prevState => !prevState)
    }
    const maxHeight = !toggleMoreInfo ? "55px" : "200px"
    return (
        <div onClick={handleToggleInfo} className={`moreInfo bg-white border-2 mx-2 lg:mx-6 rounded-lg transition-all duration-500 delay-75 ease-in-out overflow-hidden` } style={{maxHeight:maxHeight}} >
            <div className="container px-3 py-2 lg:px-6">
                <div className="top flex justify-between items-center">
                    <h1 className='w-5/6 font-medium leading-9 truncate'>{title}</h1>
                    <div className={`icon w-4 h-4 lg:w-6 lg:h-6 text-[#a1a3ac] ${toggleMoreInfo ? "rotate-0 duration-300" : "rotate-180 duration-300"}`}>
                        <MoreInfoIcon />
                    </div>
                </div>
                <div className="bottom">
                    <p className='text-[#a1a3ac] text-sm leading-6'>{detail}</p>
                </div>
            </div>
        </div>
    )
}


