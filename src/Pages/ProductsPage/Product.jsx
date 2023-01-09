import React from 'react'

export default function Product({ faName, price, image, itemCode, persianTitle, categoryTitle, onProductClick }) {

    return (
        // <div onClick={() => onProductClick(itemCode)} className="product hover:scale-110 border-2 rounded-xl mx-4 my-4 dark:bg-gray-700 dark:text-white">
        //     <div className="container px-4">
        //         <div className="top my-4">
        //             <div className="image w-72 flex justify-center ">
        //                 <img className='rounded-2xl  h-52' src={image} alt="" />
        //             </div>
        //         </div>
        //         <div className="bottom h-24 flex  justify-between my-4">
        //             <div className="data w-6/12">
        //                 <div className="title">
        //                     {faName}
        //                 </div>
        //                 <div className="price">
        //                     {price}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div onClick={() => onProductClick(itemCode)} className="cart border-b mx-6 bg-white lg:my-4 lg:rounded-lg lg:border-2 lg:w-72 lg:hover:shadow-xl">
                <div className="container flex py-6 lg:flex-col lg:py-4 lg:px-8 lg:gap-y-6">
                    <div className="top-right flex justify-center items-center rounded-lg w-5/12 lg:w-full h-fit lg:h-60">
                        <img src={image} alt="" />
                    </div>
                    <div className="bottom flex flex-col lg:gap-y-10 justify-between w-7/12 lg:w-full">
                        <div className="top flex flex-col gap-y-2">
                            <div className="category text-xs text-[#a1a3ac]">
                                {categoryTitle}
                            </div>
                            <div className="title text-xs font-medium truncate">
                                {faName}
                            </div>
                        </div>
                        <div className="bottom-left flex justify-between items-center lg:flex-row-reverse">
                            <div className="price font-medium text-xs lg:text-sm text-[#1c95ab]">
                                {price} تومان
                            </div>
                            <div className="itemGropu text-xs font-medium p-1 rounded-md bg-[#fef2f2] text-[#a11a0f]">
                                {persianTitle}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
