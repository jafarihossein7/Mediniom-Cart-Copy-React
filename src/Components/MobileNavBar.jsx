import React from 'react'
import HomeIcon from '../SVG/HomeIcon'
import { Link } from "react-router-dom"

export default function MobileNavBar() {
  return (
    <div className="mobile-navbar lg:hidden bg-white fixed left-0 bottom-0 right-0 flex justify-around border-t rounded-xl py-4 px-2">
      <Link to="/">
        <div className="item text-[#a1a3ac]">
          <div className="icon w-7 h-7">
            <HomeIcon />
          </div>
          <div className="name">
            خانه
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className="item text-[#a1a3ac]">
          <div className="icon w-7 h-7">
            <HomeIcon />
          </div>
          <div className="name">
            خانه
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className="item text-[#a1a3ac]">
          <div className="icon w-7 h-7">
            <HomeIcon />
          </div>
          <div className="name">
            خانه
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className="item text-[#a1a3ac]">
          <div className="icon w-7 h-7">
            <HomeIcon />
          </div>
          <div className="name">
            خانه
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className="item text-[#a1a3ac]">
          <div className="icon w-7 h-7">
            <HomeIcon />
          </div>
          <div className="name">
            خانه 
          </div>
        </div>
      </Link>
    </div>
  )
}
