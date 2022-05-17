import {USER_ORDER_REQUSET, USER_ORDER_SUCCESS, USER_ORDER_FAIL, CLEAR_ERRORS } from "../constant/keys";
import axios from 'axios';

export const getUserOrders = () => async (dispatch) => {
    try {

        dispatch({ type :USER_ORDER_REQUSET});
    
        const { data } = await axios.get('/api/v1/order/me');
    
        dispatch({
            type: USER_ORDER_SUCCESS,
            payload: data
        })
    }catch(error) {
        dispatch({
            type: USER_ORDER_FAIL,
            payload : error.payload.data.message,
        })
    }
}   


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };