import React from 'react'
import Search from '../SVG/Search'

export default function MobileSearch() {
    return (
        <div className="search-box lg:hidden px-4 py-4 rounded-lg flex justify-between bg-[#f3f4f6]">
            <input className='bg-transparent border-none outline-none' type="text" placeholder='نام محصول...' />
            <div className="search w-5">
                <Search />
            </div>
        </div>
    )
}
