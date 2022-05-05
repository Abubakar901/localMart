import axios from 'axios';

import { 
    ALL_SHOP_REQUEST,
    ALL_SHOP_SUCCESS,
    ALL_SHOP_FAIL,

    SHOP_DETAILS_REQUEST,
    SHOP_DETAILS_SUCCESS,
    SHOP_DETAILS_FAIL,

    SELLER_SHOP_REQUEST,
    SELLER_SHOP_SUCCESS,
    SELLER_SHOP_FAIL,

    ADMIN_SHOP_REQUEST,
    ADMIN_SHOP_SUCCESS,
    ADMIN_SHOP_FAIL,

    CREATE_SHOP_REQUEST,
    CREATE_SHOP_SUCCESS,
    CREATE_SHOP_FAIL,
    CREATE_SHOP_RESET,

    CLEAR_ERRORS } from '../constant/keys';

export const getShop = (pageNumber ) => async (dispatch) => {
    try {
        dispatch({
             type :ALL_SHOP_REQUEST
        });

        let link = `/api/v1/shops?page=${pageNumber}`;

        const { data } = await axios.get(link);

        dispatch({
            type: ALL_SHOP_SUCCESS,
            payload:  data
        })

    }   catch (error) {
        dispatch({
            type: ALL_SHOP_FAIL,
            payload : error.response.data.message,
        })
    }
};

export const getShopDetails =(id) => async (dispatch) => {

    try {
      dispatch({ type:SHOP_DETAILS_REQUEST });

      const { data } = await axios.get(`/api/v1/shop/${id}`);

      dispatch({
        type: SHOP_DETAILS_SUCCESS,
        payload: data.shop,
      });
    } catch (error) {
      dispatch({
        type: SHOP_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


// get all shops for admin
export const getAdminShops = () => async(dispatch) => {
    try {
        dispatch({ type: ADMIN_SHOP_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/shops`) ;

        dispatch({
            type: ADMIN_SHOP_SUCCESS,
            payload: data.shops
        })
    }catch(error) {
        dispatch({
            type: ADMIN_SHOP_FAIL,
            payload : error.payload.data.message,
        })
    }
}

// get seller shops
export const getSellerShops = () => async(dispatch) => {
    try {
        dispatch({ type: SELLER_SHOP_REQUEST })

        const { data } = await axios.get(`/api/v1/seller/shops`) ;

        dispatch({
            type: SELLER_SHOP_SUCCESS,
            payload: data.shops
        })
    }catch(error) {
        dispatch({
            type: SELLER_SHOP_FAIL,
            payload : error.payload.data.message,
        })
    }
}

// Create Product
export const createShop = (shopData) => async (dispatch) => {
    try {
        dispatch({ type : CREATE_SHOP_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `/api/v1/seller/shops/new`,
        shopData,
        config
      );
  
      dispatch({
        type: CREATE_SHOP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_SHOP_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};