import React from 'react'
import shopProfile from "../../images/icon/empty-shop-profile.webp"

export default function ProductShopData({shopName,shopCity,quantity,diffDays}) {
    return (
        <div className="count flex lg:flex-col lg:gap-y-10 lg:items-center  justify-between border-b py-6">
            <div className="right flex lg:items-center lg:flex-col gap-x-2">
                <div className="image">
                    <img className='w-16 h-16' src={shopProfile} alt="" />
                </div>
                <div className="shop flex flex-col lg:items-center justify-between py-1">
                    <div className="shop-name text-sm lg:w-full w-2 font-medium">
                        {shopName}
                    </div>
                    <div className="city text-xs text-[#1c95ab]">
                        {shopCity}
                    </div>
                </div>
            </div>
            <div className="left flex items-center">
                <div className="right pl-1 lg:pl-8">
                    <div className='font-medium text-center'>{quantity}</div>
                    <div className='text-xs text-[#a1a3ac]'>تعداد محصول</div>
                </div>
                <div className="left border-r pr-1 lg:pr-8">
                    <div className='font-medium text-center'>{diffDays}</div>
                    <div className='text-xs text-[#a1a3ac]'>روز در مدینیوم</div>
                </div>
            </div>
        </div>
    )
}
