import {
    USER_ORDER_REQUSET,
    USER_ORDER_SUCCESS,
    USER_ORDER_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    ADMIN_ORDER_REQUEST,
    ADMIN_ORDER_SUCCESS,
    ADMIN_ORDER_FAIL,
    CLEAR_ERRORS
} from "../constant/keys";
import axios from 'axios';

export const getUserOrders = () => async (dispatch) => {
    try {

        dispatch({type: USER_ORDER_REQUSET});

        const {data} = await axios.get('/api/v1/order/me');

        dispatch({type: USER_ORDER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: USER_ORDER_FAIL, payload: error.payload.data.message})
    }
}


export const getOrderDetails = (id) => async (dispatch) => {

    try {
        dispatch({type: ORDER_DETAILS_REQUEST});

        const {data} = await axios.get(`/api/v1/order/${id}`);

        dispatch({type: ORDER_DETAILS_SUCCESS, payload: data.order});
    } catch (error) {
        dispatch({type: ORDER_DETAILS_FAIL, payload: error.response.data.message});
    }
};


export const deleteOrder = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_ORDER_REQUEST });
  
      const { data } = await axios.delete(`/api/v1/order/${id}`);
  
      dispatch({
        type: DELETE_ORDER_SUCCESS,
        payload : data.success
      })
  
    }catch(error) {
      dispatch({
        type: DELETE_ORDER_FAIL,
        payload : error.response.data.message
      })
    }
  }


// get all orders for admin
export const getAdminOrders = () => async (dispatch) => {
    try {
        dispatch({type: ADMIN_ORDER_REQUEST})

        const {data} = await axios.get(`/api/v1/admin/orders`);

        dispatch({type: ADMIN_ORDER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ADMIN_ORDER_FAIL, payload: error.payload.data.message})
    }
}


export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
};
