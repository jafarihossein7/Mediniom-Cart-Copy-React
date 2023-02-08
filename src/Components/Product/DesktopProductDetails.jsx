import React from 'react'
import BreadCrumb from "../Body/BreadCrumb"
import ProductImage from '../Product/ProductImage'
import ProductShopData from '../Product/ProductShopData'
import ProductTitle from '../Product/ProductTitle'
import SendProduct from '../Product/SendProduct'
import Warning from '../Product/Warning'
import AddToCart from '../Product/AddToCart'
import { useCartFunctions } from '../../Context/product-context'
import Price from '../Product/Price'
import ProductProperties from "../Product/ProductProperties"

export default function DesktopProductDetails({
    image,
    faName,
    quantity,
    shopName,
    shopCity,
    createdAt,
    properties,
    productId,
    price,
    count,
    productData
}) {

    let now = new Date();
    let createTime = new Date(createdAt)
    let diffTime = Math.abs(now - createTime)
    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    let links = [
        { title: "صفحه اصلی", link: "/" },
        { title: "محصولات", link: "/" },
        { title: "تجهیزات زیبایی و بهداشتی", link: "/" },
        { title: "مراقبت از دهان و دندان", link: "/" },
        { title: "خمیر دندان", link: `/product/${productId}` },
    ]


    const { addToCart, increaseProduct, decreaseProduct } = useCartFunctions()

    return (<>
        <div className="container hidden lg:flex  gap-x-10">
            <div className="right pt-2 pb-8 bg-white w-9/12 h-fit  border rounded-xl">
                <div className="container">
                    <div className="top">
                        <BreadCrumb links={links} />
                    </div>
                    <div className="bottom flex gap-x-24">
                        <div className="right">
                            <ProductImage image={image} />
                        </div>
                        <div className="left">
                            <ProductTitle faName={faName} />
                            <ProductProperties properties={properties} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="left w-3/12">
                <div className="container">
                    <div className="top border bg-white rounded-xl">
                        <ProductShopData shopName={shopName} shopCity={shopCity} quantity={quantity} diffDays={diffDays} />
                        <SendProduct />
                        <Price count={count} price={price} />
                        <AddToCart
                            decreaseProduct={decreaseProduct}
                            productId={productId}
                            count={count}
                            quantity={quantity}
                            increaseProduct={increaseProduct}
                            addToCart={addToCart}
                            productData={productData}
                            price={price}
                            title="تکمیل خرید"
                        />
                    </div>
                    <div className="bottom my-2">
                        <Warning />
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
