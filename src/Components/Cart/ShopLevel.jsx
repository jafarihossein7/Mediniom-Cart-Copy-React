import React from 'react'

export default function ShopLevel({ shopSituation }) {
    return (
        <div className='flex gap-x-40 justify-center'>
            <div className={`${shopSituation === "cart" ? "bg-[#1c95ab]" : "bg-slate-400"} text-white px-4 py-2 rounded-lg`}>1</div>
            <div className={`${shopSituation === "sendInformation" ? "bg-[#1c95ab]" : "bg-slate-400"} text-white px-4 py-2 rounded-lg`}>2</div>
            <div className='bg-slate-400 text-white px-4 py-2 rounded-lg'>3</div>
        </div>
    )
}
