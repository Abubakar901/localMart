import { ALL_SHOP_REQUEST, 
        ALL_SHOP_SUCCESS,
        ALL_SHOP_FAIL,
        SHOP_DETAILS_REQUEST,
        SHOP_DETAILS_SUCCESS,
        SHOP_DETAILS_FAIL,
        ADMIN_SHOP_REQUEST,
        ADMIN_SHOP_SUCCESS,
        ADMIN_SHOP_FAIL,
        CLEAR_ERRORS } from "../constant/keys"
        
export const shopReducer = (state = { shops : [] }, action) => {
    switch(action.type) {
        case ALL_SHOP_REQUEST : 
        case ADMIN_SHOP_REQUEST:
            return {
                loading: true,
                shop: []
            }   
        case ALL_SHOP_SUCCESS: 
            return {
                loading: false,
                shops: action.payload.shops,
                shopsCounts : action.payload.shopsCounts,
                resultPerPage: action.payload.resultPerPage
            }
        case ADMIN_SHOP_SUCCESS:
            return {
                loading:false,
                shops:action.payload
            }
        case ALL_SHOP_FAIL :
        case ADMIN_SHOP_FAIL:
            return {
                loading:false,
                error: action.payload
            }
        case CLEAR_ERRORS :
            return {
                ...state,
                error: null
            }
        default:
            return state
        }
}  


export const shopDetailsReducer = (state = { shop: {} }, action)=>{
    switch (action.type) {
        case SHOP_DETAILS_REQUEST:
            return{
                loading:true,
                ...state
            }
        case SHOP_DETAILS_SUCCESS:
            return{
                loading:false,
                shop:action.payload,
            }
        case SHOP_DETAILS_FAIL:
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