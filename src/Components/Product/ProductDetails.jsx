import React from 'react'
import BreadCrumb from '../Body/BreadCrumb';
import { useCartFunctions } from '../../Context/product-context';
import AddToCart from '../Product/AddToCart';
import Price from '../Product/Price';
import ProductImage from '../Product/ProductImage';
import ProductShopData from '../Product/ProductShopData';
import ProductTitle from '../Product/ProductTitle';
import SendProduct from '../Product/SendProduct';
import Warning from '../Product/Warning';
import ProductProperties from '../Product/ProductProperties';

export default function ProductDetails({
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


    return (
        <div className="productDetail lg:hidden">
            <div className="container px-2">
                <BreadCrumb links={links} />
                <ProductImage image={image} />
                <ProductTitle faName={faName} />
                <ProductShopData shopName={shopName} shopCity={shopCity} quantity={quantity} diffDays={diffDays} />
                <SendProduct />
                <Warning />
                <ProductProperties properties={properties} />
                <div className="div flex justify-between items-center px-2 fixed left-0 right-0 bottom-20 bg-white">
                    <AddToCart
                        decreaseProduct={decreaseProduct}
                        productId={productId}
                        count={count}
                        quantity={quantity}
                        increaseProduct={increaseProduct}
                        addToCart={addToCart}
                        productData={productData}
                        price={price}
                        title="افزودن به سبد خرید"
                    />
                    <Price count={count} price={price} />
                </div>
            </div>
        </div>
    )
}
