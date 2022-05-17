import {USER_ORDER_REQUSET, USER_ORDER_SUCCESS, USER_ORDER_FAIL, CLEAR_ERRORS } from "../constant/keys";

export const userOrderReducer =  (state = { orders:[] }, action) => {
    switch(action.type) {
        case USER_ORDER_REQUSET:
            return {
                loading: true,
                orders: []
            }
        case USER_ORDER_SUCCESS:
            return {
                loading: false,
                orders:action.payload.orders
            }
        case USER_ORDER_FAIL:
            return {
                loading:false,
                error:action.payload,
            }
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error: null,
                };
         default:
            return state;
    }
}