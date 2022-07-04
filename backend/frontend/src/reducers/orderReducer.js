import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,

    USER_ORDER_REQUSET,
    USER_ORDER_SUCCESS,
    USER_ORDER_FAIL,

    ADMIN_ORDER_REQUEST,
    ADMIN_ORDER_SUCCESS,
    ADMIN_ORDER_FAIL,

    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    DELETE_ORDER_RESET,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    SELLER_ORDER_REQUEST,
    SELLER_ORDER_SUCCESS,
    SELLER_ORDER_FAIL,

    CLEAR_ERRORS
} from "../constant/keys";

export const newOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload,
            };

        case CREATE_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const userOrderReducer = (state = {
    orders: []
}, action) => {
    switch (action.type) {
        case USER_ORDER_REQUSET:
        case ADMIN_ORDER_REQUEST:
        case SELLER_ORDER_REQUEST:
            return { loading: true, orders: [] }
        case USER_ORDER_SUCCESS:
            return { loading: false, orders: action.payload.orders }
        case SELLER_ORDER_SUCCESS:
        case ADMIN_ORDER_SUCCESS:
            return { loading: false, orders: action.payload.orders, totalAmount: action.payload.totalAmount, totalOrders: action.payload.totalOrders }
        case USER_ORDER_FAIL:
        case ADMIN_ORDER_FAIL:
        case SELLER_ORDER_FAIL:
            return { loading: false, error: action.payload }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}


export const orderDetailsReducer = (state = {
    order: {}
}, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }
        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const editDeleteOrderReducer = (state = { order: {} }, action) => {
    switch (action.type) {
        case DELETE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            };
        case DELETE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_ORDER_RESET:
            return {
                ...state,
                isDeleted: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};