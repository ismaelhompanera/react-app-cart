import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
} from "../actions/type";

const initialState = [];

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  if (type === ADD_PRODUCT_TO_CART) {
    return [...state, payload]
  }
  if (type === REMOVE_PRODUCT_FROM_CART) {
    return state.filter((item) => item.id !== payload)
  }
  return state;
}
