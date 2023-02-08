import React from 'react'

export default function ProductImage({image}) {
    return (
        <div className="image py-2 ">
            <img className='lg:w-80 lg:h-96' src={image} alt="" />
        </div>
    )
}
