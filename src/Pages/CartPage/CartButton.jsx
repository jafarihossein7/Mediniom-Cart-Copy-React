import React from 'react'

export default function CartButton({ shopSituation, compeleteBuy, sendInformation }) {
    return (
        <button onClick={shopSituation === "cart" ? compeleteBuy : sendInformation} className='bg-[#1c95ab] text-white p-4 lg:px-24 lg:py-2 rounded-lg my-4'>
            {shopSituation === "cart" ? "ثبت آدرس" : "تکمیل خرید"}
        </button>
    )
}
