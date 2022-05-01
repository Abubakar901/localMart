import  {
    CREATE_CART_REQUEST,
    CREATE_CART_SUCCESS,
    CLEAR_ERRORS,
    CREATE_CART_FAIL } from '../constant/keys';

 export const newCartReducer = (state = { cart : [] }, action) => {
        switch (action.type) {
          case CREATE_CART_REQUEST:
            return {
              ...state,
              loading: true,
            };
      
          case CREATE_CART_SUCCESS:
            return {
              loading: false,
              cart: action.payload,
            };
      
          case CREATE_CART_FAIL:
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