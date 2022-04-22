import axios from 'axios';

import { 
    ALL_SHOP_REQUEST,
    ALL_SHOP_SUCCESS,
    ALL_SHOP_FAIL,
    SHOP_DETAILS_REQUEST,
    SHOP_DETAILS_SUCCESS,
    SHOP_DETAILS_FAIL,
    CLEAR_ERRORS } from '../constant/keys';

export const getShop = () => async (dispatch) => {
    try {
        dispatch({
             type :ALL_SHOP_REQUEST
        });

        const { data } = await axios.get("/api/v1/shops");

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

export const getShopDetails = (id) => async (dispatch) => {
    try {
        dispatch({
             type :SHOP_DETAILS_REQUEST
        });

        const { data } = await axios.get(`/api/v1/shops/${id}`);

        dispatch({
            type: SHOP_DETAILS_SUCCESS,
            payload:  data.shop,
        })

    }   catch (error) {
        dispatch({
            type: SHOP_DETAILS_FAIL,
            payload : error.response.data.message,
        })
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};