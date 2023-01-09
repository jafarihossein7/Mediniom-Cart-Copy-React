import React from 'react'
import ShoppingCart from '../../../SVG/ShoppingCart'

export default function SendProduct() {
    return (
        <div className="top pt-6 pb-4 flex justify-center gap-x-1 lg:border-b">
            <div className="icon">
                <ShoppingCart />
            </div>
            <div className='text-sm font-medium'>ارسال محصول توسط فروشنده</div>
        </div>
    )
}
