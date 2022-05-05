import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    SELLER_PRODUCT_REQUEST,
    SELLER_PRODUCT_SUCCESS,
    SELLER_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constant/keys';
import axios from 'axios';

export const getProduct =() => async (dispatch) => {

    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });

      const { data } = await axios.get(`/api/v1/products`);

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const getProductDetails =(id) => async (dispatch) => {

    try {
      dispatch({ type:PRODUCT_DETAILS_REQUEST });

      const { data } = await axios.get(`/api/v1/products/${id}`);

      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // get seller products
export const getSellerProducts = () => async(dispatch) => {
  try {
      dispatch({ type: SELLER_PRODUCT_REQUEST })

      const { data } = await axios.get(`/api/v1/seller/products`) ;

      dispatch({
          type: SELLER_PRODUCT_SUCCESS,
          payload: data.products
      })
  }catch(error) {
      dispatch({
          type: SELLER_PRODUCT_FAIL,
          payload : error.payload.data.message,
      })
  }
}


  // get all shops for admin/seller
export const getAdminProducts = () => async(dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/products`) ;

        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data.products
        })
    } catch(error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload :  error.payload.data.message,
        })
    }
}

  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };