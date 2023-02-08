import React from 'react'
import Search from '../../SVG/Search'

export default function HeaderSearch() {
  return (
    <div className="serach-box hidden lg:flex justify-between bg-[#f3f4f6] w-[580px] px-4 py-3 rounded-lg">
      <input className='bg-transparent border-none outline-none' type="text" placeholder='نام محصول...' />
      <div className="search w-5">
        <Search />
      </div>
    </div>
  )
}
