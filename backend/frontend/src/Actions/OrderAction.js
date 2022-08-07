import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    USER_ORDER_REQUSET,
    USER_ORDER_SUCCESS,
    USER_ORDER_FAIL,
    SELLER_ORDER_REQUEST,
    SELLER_ORDER_SUCCESS,
    SELLER_ORDER_FAIL,
    SELLER_EXTRA_REQUEST,
    SELLER_EXTRA_SUCCESS,
    SELLER_EXTRA_FAIL,
    UPDATE_SELLER_ORDER_REQUEST,
    UPDATE_SELLER_ORDER_SUCCESS,
    UPDATE_SELLER_ORDER_FAIL,
    ADMIN_ORDER_REQUEST,
    ADMIN_ORDER_SUCCESS,
    ADMIN_ORDER_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    CLEAR_ERRORS
} from "../Constants/OrderConstants";
import axios from "axios";


// Create Order
export const createOrder = (order) => async(dispatch) => {
    try {
        dispatch({ type: CREATE_ORDER_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.post("/api/v1/order/new", order, config);

        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// get user orders --- all user
export const getUserOrders = () => async(dispatch) => {
    try {

        dispatch({ type: USER_ORDER_REQUSET });

        const { data } = await axios.get('/api/v1/order/me');

        dispatch({ type: USER_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_ORDER_FAIL, payload: error.payload.data.message })
    }
}

// get order details --- seller, admin
export const getOrderDetails = (id) => async(dispatch) => {

    try {
        dispatch({ type: ORDER_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/order/${id}`);

        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
    } catch (error) {
        dispatch({ type: ORDER_DETAILS_FAIL, payload: error.response.data.message });
    }
};


// delete order request --- all user
export const deleteOrder = (id) => async(dispatch) => {
    try {
        dispatch({ type: DELETE_ORDER_REQUEST });

        const { data } = await axios.delete(`/api/v1/order/${id}`);

        dispatch({
            type: DELETE_ORDER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}

// seller order requset
export const getSellerOrders = (id) => async(dispatch) => {
    try {
        dispatch({ type: SELLER_ORDER_REQUEST })

        const { data } = await axios.get(`/api/v1/seller/order/${id}`);

        dispatch({ type: SELLER_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SELLER_ORDER_FAIL, payload: error.payload.data.message })
    }
}

// seller order extra requset
export const getSellerOrdersExtra = () => async(dispatch) => {
    try {
        dispatch({ type: SELLER_EXTRA_REQUEST })

        const { data } = await axios.get(`/api/v1/seller/additional`);

        dispatch({ type: SELLER_EXTRA_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SELLER_EXTRA_FAIL, payload: error.payload.data.message })
    }
}



// update orders --- seller
export const updateOrder = (id, order) => async(dispatch) => {
    try {
        dispatch({ type: UPDATE_SELLER_ORDER_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.put(
            `/api/v1/seller/order/${id}`,
            order,
            config
        );

        dispatch({ type: UPDATE_SELLER_ORDER_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({
            type: UPDATE_SELLER_ORDER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// get all orders for admin
export const getAdminOrders = () => async(dispatch) => {
    try {
        dispatch({ type: ADMIN_ORDER_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/orders`);

        dispatch({ type: ADMIN_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_ORDER_FAIL, payload: error.payload.data.message })
    }
}


// clear errors
export const clearErrors = () => async(dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};