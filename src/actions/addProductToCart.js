import {
  ADD_PRODUCT_TO_CART,
} from "./type";

export function addProductToCart (product) {
    return {
      type: ADD_PRODUCT_TO_CART,
      payload: product,
    }
}