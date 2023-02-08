import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import { useCartFunctions, useProductState } from '../../Context/product-context'
import Price from '../../Components/Product/Price'
import CartButton from '../../Components/Cart/CartButton'
import CartProduct from '../../Components/Cart/CartProduct'
import ShopLevel from '../../Components/Cart/ShopLevel'
import Input from '../../Components/Cart/Input'

export default function Cart() {
  const [shopSituation, setshopSituation] = useState("cart")
  const [address, setaddress] = useState("")


  const { cartProduct } = useProductState()
  const { increaseProduct, decreaseProduct, deleteProduct, wipeCart } = useCartFunctions()


  let currentProduct = cartProduct.map((value) => {
    return value
  })
  let currentPrice = 0;
  let productId;
  currentProduct.length ? productId = currentProduct[0].id : null

  if (currentProduct.length > 0) {
    for (let i = 0; i < currentProduct.length; i++) {
      currentPrice += currentProduct[i].price * currentProduct[i].count
    }
  } else {
    null
  }

  function compeleteBuy() {
    setshopSituation("sendInformation")
  }
  function sendInformation() {
    console.log(address)
    let productId = cartProduct.map((value) => {
      return value.id
    })
    console.log(productId)
    wipeCart()
  }

  return (
    <Layout>
      {
        cartProduct.length ?
          <div className="products">
            <ShopLevel shopSituation={shopSituation} />
            <div className='flex  justify-between '>
              <div className="right">
                {
                  shopSituation === "cart" && cartProduct && cartProduct.map((value) => {
                    return <CartProduct
                      key={value.id}
                      faName={value.faName}
                      image={value.image}
                      price={value.price}
                      quantity={value.quantity}
                      count={value.count}
                      increaseProduct={increaseProduct}
                      decreaseProduct={decreaseProduct}
                      productId={value.id}
                    />
                  })
                }
                {
                  shopSituation === "sendInformation" &&
                  <Input
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                    placeholder="آدرس را وارد کنید"
                    className="w-96 rounded-lg p-4"
                  />
                }
              </div>
              <div className="left">
                <div className='bg-white h-fit px-4 py-2 rounded-xl mt-32'>
                  <Price price={currentPrice} />
                  <CartButton shopSituation={shopSituation} compeleteBuy={compeleteBuy} sendInformation={sendInformation} />
                </div>
              </div>
            </div>
          </div>
          :
          <p className='flex justify-center'>سبد خرید خالی است</p>
      }


      {/* <div className="button flex justify-end">
        <button onClick={wipeCart} className='bg-purple-700 text-white px-4 py-2 rounded-2xl'>complete</button>
      </div> */}
    </Layout>
  )
}

