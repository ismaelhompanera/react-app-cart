import {
  RETRIEVE_PRODUCTS,
} from "../actions/type";

const initialState = [];

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  if (type === RETRIEVE_PRODUCTS) {
    return payload
  }
  return state;
}
