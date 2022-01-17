import {
  RETRIEVE_PRODUCTS,
} from "./type";
import ProductsService from "../services/products.service.js";

export const getProducts = () => async (dispatch) => {
  try {

    const res = await ProductsService.getProducts();
    
    dispatch({
      type: RETRIEVE_PRODUCTS,
      payload: res,
    });
    
  } catch (err) {
    console.error(err);
  }
};