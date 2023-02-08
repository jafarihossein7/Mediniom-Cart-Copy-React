import React, { useContext, useReducer, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { actionTypes, initState, reducer } from "./reducer";

const ProductStateContext = React.createContext()
const CartFunctionsContext = React.createContext()

export function useProductState() {
  const context = useContext(ProductStateContext)
  if (!context) {
    throw Error("useProductState must be used with a ProductProvider")
  }
  return context
}
export function useCartFunctions() {
  const context = useContext(CartFunctionsContext)
  if (!context) {
    throw Error("useProductDispatch must used with a ProductProvider")
  }
  return context
}


export default function ProductProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    let localStorageProducts = getLocalStorage("products") ?? []
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        cartProduct: localStorageProducts
      }
    })

  }, [])

  function addToCart(productData) {
    let product = {
      faName: productData.faName,
      image: productData.imageList[1].image,
      price: productData.shopItemList[0].price,
      id: productData.itemCode,
      quantity: productData.shopItemList[0].shop.itemsCount,
      count: 1
    }
    let oldProducts = state.cartProduct
    let newProducts = [...oldProducts, product]
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        cartProduct: newProducts
      }
    })
    setLocalStorage("products", newProducts)
  }

  function increaseProduct(productId) {
    dispatch({
      type: actionTypes.INCREASE_PRODUCT,
      payload: {
        productId
      }
    })
  }

  function decreaseProduct(productId) {
    dispatch({
      type: actionTypes.DECREASE_PRODUCT,
      payload: {
        productId
      }
    })
  }

  function deleteProduct(productId) {
    dispatch({
      type: actionTypes.DELETE_PRODUCT,
      payload: {
        productId
      }
    })
  }

  function wipeCart() {
    dispatch({
      type: actionTypes.WIPE_CART,
    })
    localStorage.removeItem("products")
  }

  function currentProduct(productId) {
    let product = state.cartProduct.filter((value) => {
      return value.id == productId
    })
    return product.length > 0 ? product[0] : {}
  }

  // function isExistInProductFunction(productId) {
  //   return state.cartProduct.some((value) => {
  //     return value.id.includes(productId)
  //   })
  // }




  return (
    <ProductStateContext.Provider value={state}>
      <CartFunctionsContext.Provider value={{ addToCart, increaseProduct, decreaseProduct, deleteProduct, wipeCart, currentProduct }}>
        {children}
      </CartFunctionsContext.Provider>
    </ProductStateContext.Provider>
  )
}