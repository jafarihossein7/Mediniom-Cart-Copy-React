import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { get } from '../../Services/Http'
import loading1 from "../../Gif/loading1.gif";
import { useCartFunctions, useProductState } from '../../Context/product-context';
import ProductDetails from './ProductDetails';
import DesktopProductDetails from './DesktopProductDetails';

export default function ProductPage() {
  const [productData, setproductData] = useState(null)
  const [loading, setloading] = useState(false)

  const { cartProduct } = useProductState()
  let { productId } = useParams()
  const { addToCart, increaseProduct, decreaseProduct, currentProduct } = useCartFunctions()
  let { count, quantity } = currentProduct(productId)

  useEffect(() => {
    setloading(true)
    get(`/item/${productId}`)
      .then(response => {
        setproductData(response.data)
        setloading(false)
      })
  }, [])

  // let isExistInProduct = isExistInProductFunction(productId)
  // console.log(isExistInProductFunction(productId));
  
  // let selectedProduct = cartProduct.filter((value) => {
  //   return value.id == productId
  // })
  // let count;
  // let quantity;
  // if (selectedProduct.length > 0) {
  //   count = selectedProduct[0].count
  //   quantity = selectedProduct[0].quantity
  // }
  return (
    <Layout>
      {
        loading && <img className='mx-auto' src={loading1} />
      }
      {
        (productData && !loading)
        &&
        < DesktopProductDetails
          image={productData.imageList[1].image}
          faName={productData.faName}
          quantity={productData.shopItemList[0].shop.itemsCount}
          shopName={productData.shopItemList[0].shop.name}
          shopCity={productData.shopItemList[0].shop.city.name}
          createdAt={productData.shopItemList[0].shop.createdAt}
          properties={productData.properties}
          productId={productId}
          price={productData.shopItemList[0].price}
          count={count}
          productData={productData}
        />
      }
      {
        (productData && !loading)
        &&
        <ProductDetails
          image={productData.imageList[1].image}
          faName={productData.faName}
          quantity={productData.shopItemList[0].shop.itemsCount}
          shopName={productData.shopItemList[0].shop.name}
          shopCity={productData.shopItemList[0].shop.city.name}
          createdAt={productData.shopItemList[0].shop.createdAt}
          properties={productData.properties}
          productId={productId}
          price={productData.shopItemList[0].price}
          count={count}
          productData={productData}
        />
      }
    </Layout >
  )
}






{/* <div className="product w-1/2 border-2 rounded-xl mx-4 my-4 dark:bg-gray-700 dark:text-white">
<div className="container px-4">
  <div className="top my-4">
    <div className="image w-72 flex justify-center ">
      <img className='rounded-2xl  h-52' src={productData.imageList[1].image} alt="" />
    </div>
  </div>
  <div className="bottom h-24 flex  justify-between my-4">
    <div className="data w-6/12">
      <div className="title">
        {
          productData.faName
        }
      </div>
      <div className="price">
        {
          productData.shopItemList[0].price
        }
      </div>
    </div>
    <div className="button">
      {
        isExistInProduct ?
          <>
            <div className='flex items-center'>
              <button onClick={() => decreaseProduct(productId)} className='bg-red-700 text-white rounded-lg px-4'>
                -
              </button>
              <div className='px-2'>
                {count}
              </div>
              <button onClick={count != quantity ? () => increaseProduct(productId) : null} className={`${count == quantity ? "bg-blue-200" : "bg-blue-700"}  text-white rounded-lg px-4`}>
                +
              </button>
            </div>
          </>
          :
          <button onClick={() => addToCart(productData)} className='bg-green-700 text-white px-2 py-2 rounded-xl'>
            Add To Cart
          </button>
      }
    </div>
  </div>
</div>
</div> */}

