import { 
    ALL_PRODUCT_FAIL, 
    ALL_PRODUCT_REQUEST, 
    ALL_PRODUCT_SUCCESS, 
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
} from "../constant/keys";

export const productReducer = (state = { product:[] }, action) =>{
     switch (action.type) {
        case ALL_PRODUCT_REQUEST:
        case SELLER_PRODUCT_REQUEST:
        case ADMIN_PRODUCT_REQUEST:
            return{
                 loading:true,
                 product:[]
             };
        case ALL_PRODUCT_SUCCESS:
            return{
                 loading:false,
                 products:action.payload.products,
                 category: action.payload.category
             };
        case ADMIN_PRODUCT_SUCCESS:
        case SELLER_PRODUCT_SUCCESS:
            return {
                loading:false,
                products:action.payload
            }
        case ALL_PRODUCT_FAIL:
        case ADMIN_PRODUCT_FAIL:
        case SELLER_PRODUCT_FAIL:
            return{
                loading:false,
                error:action.payload,
            };
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            };
         default:
            return state;
     }
};

export const productDetailsReducer = (state = { product: {} }, action)=>{
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return{
                loading:true,
                ...state
            }
        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload,
            }
        case PRODUCT_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }
        default:
            return state;
    }
}