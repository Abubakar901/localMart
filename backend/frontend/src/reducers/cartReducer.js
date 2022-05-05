import  {
    CREATE_CART_REQUEST,
    CREATE_CART_SUCCESS,
    CLEAR_ERRORS,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    DELETE_CART_REQUEST,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAIL,
    CREATE_CART_FAIL } from '../constant/keys';


    export const newCartReducer = (state = { cart: {} }, action) => {
      switch (action.type) {
        case CREATE_CART_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case CREATE_CART_SUCCESS:
          return {
            loading: false,
            success: action.payload.success,
            cart: action.payload.cart,
          };
        case CREATE_CART_FAIL:
          return {
            ...state,
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
    

 export const getCartReducer = (state = { cart : [] }, action) => {
        switch (action.type) {
          case GET_CART_REQUEST:
            return {
              ...state,
              loading: true,
            };
            case GET_CART_SUCCESS:
              return {
                loading: false,
                cart: action.payload.cartItems,
                cartCount: action.payload.cartCount,
              };
          case GET_CART_FAIL:
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

      export const cartReducer = (state = {}, action) => {
        switch (action.type) {
          case DELETE_CART_REQUEST:
            return {
              ...state,
              loading: true,
            };
          case DELETE_CART_SUCCESS:
            return {
              ...state,
              loading: false,
              isDeleted: action.payload,
            };
          case DELETE_CART_FAIL:
            return {
              ...state,
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