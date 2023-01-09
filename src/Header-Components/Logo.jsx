import React from 'react'
import logo from "../images/typo-mediniom.png"

export default function Logo() {
    return (
        <div className="logo">
            <img className='w-28 lg:w-36' src={logo} alt="" />
        </div>
    )
}
