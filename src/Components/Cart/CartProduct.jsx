import React from 'react'
import ProductImage from '../Product/ProductImage'
import ProductTitle from '../Product/ProductTitle'
import Price from '../Product/Price'
import AddToCart from '../Product/AddToCart'

export default function CartProduct({ faName, image, price, quantity, count, increaseProduct, decreaseProduct, productId  }) {
    
    return (
        // <div className="product border-2 rounded-xl mx-4 my-2 dark:bg-gray-700 dark:text-white">
        //     <div className="container px-4">
        //         <div className="top my-4">
        //             <div className="image w-72 ">
        //                 <img className='rounded-2xl' src={image} alt="" />
        //             </div>
        //         </div>
        //         <div className="bottom flex justify-between my-4">
        //             <div className="data">
        //                 <div className="title">
        //                     {faName}
        //                 </div>
        //                 <div className="price">
        //                     {price}
        //                 </div>
        //                 <div className="all-price">
        //                     قیمت کل : {price * count}
        //                 </div>
        //             </div>
        //             <div className="button flex items-center ">
        //                 <button onClick={count == 1 ? () => deleteProduct(productId) : () => decreaseProduct(productId)} className='bg-red-700 text-white rounded-lg px-4'>{count == 1 ? "Trash" : "-"}</button>
        //                 <div className='px-2'>{count}</div>
        //                 <button onClick={count != quantity ? () => increaseProduct(productId) : null} className={`${count == quantity ? "bg-blue-200" : "bg-blue-700"}  text-white rounded-lg px-4`}>+</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className="cartProduct bg-white px-14 rounded-xl border my-8">
                <div className="container flex justify-between">
                    <div className="right">
                        <ProductImage image={image} />
                    </div>
                    <div className="left flex flex-col gap-y-20">
                        <ProductTitle faName={faName} />
                        <div className=" flex justify-end gap-x-4">
                            <div>تعداد:</div>
                            <AddToCart
                                decreaseProduct={decreaseProduct}
                                productId={productId}
                                count={count}
                                quantity={quantity}
                                increaseProduct={increaseProduct}
                                price={price}
                                title="تکمیل خرید"
                            />
                        </div>
                        <Price price={price} />
                    </div>
                </div>
            </div>
        </>
    )
}
