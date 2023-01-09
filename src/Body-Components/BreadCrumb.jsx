import React from 'react'
import { Link, useLocation } from "react-router-dom"
import BreadCrumbIcon from '../SVG/BreadCrumbIcon'

export default function BreadCrumb({ links }) {
    return (
        <div className='overflow-x-auto'>
            <div className="breadCrumb  flex items-center gap-x-2 text-sm text-[#1c95ab] mx-2 lg:mx-6 my-4">
                {
                    links && links.map((value, index) => {
                        const isLastIndex = index === links.length - 1 ? true : false
                        return <div className='whitespace-nowrap flex items-center gap-x-2'>
                            <Link to={value.link}>{value.title}</Link>
                            {
                                !isLastIndex
                                &&
                                <div className="breadCrumbIcon w-4 h-4">
                                    <BreadCrumbIcon />
                                </div>
                            }
                        </div>
                    })
                }
            </div>
        </div>

    )
}

