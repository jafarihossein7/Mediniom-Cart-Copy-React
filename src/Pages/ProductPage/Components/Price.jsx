import React from 'react'

export default function Price({ count, price }) {
    return (
        <div className="container w-20 lg:w-full lg:pt-6 lg:px-6 lg:flex lg:justify-between">
            <div className='hidden lg:block text-lg text-[#1c95ab]'>قیمت:</div>
            <div className="price text-sm lg:text-lg text-[#1c95ab]">
                {count ? price * count : price} تومان
            </div>
        </div>
    )
}
