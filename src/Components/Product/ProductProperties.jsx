import React from 'react'
import CheckIcon from '../../SVG/CheckIcon'

export default function ProductProperties({ properties }) {
    return (
        <div className="properties py-4 mb-40 lg:mb-0 ">
            <div className="title text-[#a3181b] pb-4 font-semibold">ویژگی ها</div>
            {
                properties.map((value) => {
                    return <div className='flex py-2 items-center gap-x-8'>
                        <div className="icon w-5 h-5 p-1 bg-[#1c95ab] text-white rounded-md">
                            <CheckIcon />
                        </div>
                        <div className='font-semibold'>{value}</div>
                    </div>
                })
            }
        </div>
    )
}
