import React from 'react'
import ShoppingCart from '../SVG/ShoppingCart'

export default function CartIcon() {
    return (
        <div className="cart hidden lg:block bg-[#f3f4f6] px-4 py-4 rounded-lg">
            <ShoppingCart />
        </div>
    )
}
