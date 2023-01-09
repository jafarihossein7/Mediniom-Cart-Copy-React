import React from 'react'
import { Link } from "react-router-dom";
import { useProductState } from '../Context/product-context';
import { useDarkMode } from '../Context/theme-context';
import CallUs from '../Header-Components/CallUs';
import CartIcon from '../Header-Components/CartIcon';
import DesktopLogin from '../Header-Components/DesktopLogin';
import HeaderSearch from '../Header-Components/HeaderSearch';
import Logo from '../Header-Components/Logo';
import MobileLogin from '../Header-Components/MobileLogin';
import MobileSearch from '../Header-Components/MobileSearch';

export default function Header() {
    // const { toggleDarkMode, colorTheme } = useDarkMode()
    // const { cartProduct } = useProductState()

    return (
        // <div className="header border-2 border-gray-400 rounded-2xl mx-28 my-4 bg-gray-300 dark:bg-gray-700 dark:text-white dark:border-black">
        //     <div className="container px-12 py-2">
        //         <ul className='flex justify-between items-center'>
        //             <div className="link flex gap-x-8">
        //                 <Link to="/">Products</Link>
        //                 <div className="link flex gap-x-1">
        //                     <Link to="/cart">Cart</Link>
        //                     {
        //                         <div className='bg-red-700 text-white rounded-2xl px-2 text-xs flex justify-center items-center'>{cartProduct && cartProduct.length}</div>
        //                     }
        //                 </div>

        //             </div>
        //             <button onClick={toggleDarkMode} className='bg-gray-700 dark:bg-white dark:text-black text-white px-3 py-1 rounded-xl'>
        //                 {
        //                     colorTheme === "dark" ? "Dark Mode" : "Light Mode"
        //                 }
        //             </button>
        //         </ul>
        //     </div>
        // </div>
        <>
            <div className="header border-b">
                <div className="container my-4 lg:my-0 px-2 lg:px-0 lg:mx-12 lg:flex lg:justify-between lg:items-center">
                    <div className="flex justify-between lg:gap-x-8 lg:items-center">
                        <CallUs />
                        <Link to="/">
                            <Logo />
                        </Link>
                        <HeaderSearch />
                        <MobileLogin />
                    </div>
                    <div className="my-4 lg:flex lg:gap-x-4 lg:items-center">
                        <MobileSearch />
                        <Link to="/cart">
                            <CartIcon />
                        </Link>
                        <DesktopLogin />
                    </div>
                </div>
            </div>
        </>
    )
}


