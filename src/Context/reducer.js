import { setLocalStorage } from "../utils/LocalStorage";

export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  INCREASE_PRODUCT: "INCREASE_PRODUCT",
  DECREASE_PRODUCT: "DECREASE_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  WIPE_CART: "WIPE_CART",
};

export const initState = {
  cartProduct: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartProduct: action.payload.cartProduct,
      };

    case actionTypes.INCREASE_PRODUCT:
      let increaseProductId = action.payload.productId;
      const increasedProduct = state.cartProduct.map((value) => {
        if (value.id === increaseProductId) {
          value.count = value.count + 1;
        }
        return value;
      });
      setLocalStorage("products", increasedProduct);
      return {
        ...state,
        cartProduct: increasedProduct,
      };

    case actionTypes.DECREASE_PRODUCT:
      let decreaseProductId = action.payload.productId;
      const decreasedProduct = state.cartProduct.map((value) => {
        if (value.id === decreaseProductId) {
          value.count = value.count - 1;
        }
        const productIndex = state.cartProduct.findIndex((value) => {
          return value.id == decreaseProductId;
        });
        if (value.count < 1) {
          state.cartProduct.splice(productIndex, 1);
        }
        return value;
      });
      setLocalStorage("products", decreasedProduct);
      return {
        ...state,
        cartProduct: decreasedProduct,
      };

    case actionTypes.DELETE_PRODUCT:
      let deleteProductId = action.payload.productId;
      const deletedProduct = state.cartProduct.filter((value) => {
        if (value.id != deleteProductId) {
          return value;
        }
      });
      setLocalStorage("products", deletedProduct);
      return {
        ...state,
        cartProduct: deletedProduct,
      };

    case actionTypes.WIPE_CART:
      return {
        ...state,
        cartProduct: [],
      };

    default:
      throw Error(`action type not supported: ${action.type}`);
  }
}
