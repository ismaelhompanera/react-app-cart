import {
  REMOVE_PRODUCT_FROM_CART,
} from "./type";

export function removeProductFromCart (productID) {
    return {
      type: REMOVE_PRODUCT_FROM_CART,
      payload: productID,
    }
}