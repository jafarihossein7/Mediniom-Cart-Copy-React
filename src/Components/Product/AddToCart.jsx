import React from 'react'

export default function AddToCart({
    isExistInProduct,
    decreaseProduct,
    productId,
    count,
    quantity,
    increaseProduct,
    addToCart,
    productData,
    price,
    title
}) {
    return (
        <div className=" py-4 px-2 flex justify-center  items-center">
            <div className="buttons flex flex-row-reverse">
                {
                    count ?
                        <>
                            <button onClick={() => decreaseProduct(productId)} className='bg-[#f0f1f3] text-[#3aa2b5] text-lg font-bold rounded-tl-lg rounded-bl-lg px-4'>
                                {count == 1 ? "Trash" : "-"}
                            </button>
                            <div className='px-2 bg-[#f0f1f3]'>
                                {count}
                            </div>
                            <button disabled={count >= quantity ? true : false} onClick={() => increaseProduct(productId)} className={`${count >= quantity ? "bg-blue-200" : "bg-[#f0f1f3]"}  text-[#3aa2b5] text-lg font-bold rounded-tr-lg rounded-br-lg px-4`}>
                                +
                            </button>
                        </>
                        :
                        <button onClick={() => addToCart(productData)} className='bg-[#1c95ab] text-white p-4 lg:px-24 lg:py-2 rounded-lg'>{title}</button>
                }
            </div>
        </div>
    )
}
