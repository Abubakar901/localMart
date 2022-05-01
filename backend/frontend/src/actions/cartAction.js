import axios from 'axios';
import  {
    CREATE_CART_REQUEST,
    CREATE_CART_SUCCESS,
    CREATE_CART_FAIL,
    CLEAR_ERRORS,
} from '../constant/keys';


// Create Order
export const createCartItem = (id) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_CART_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/api/v1/cart/new", id , config);
  
      dispatch({ type: CREATE_CART_SUCCESS, payload: data });

    } catch (error) {
      dispatch({
        type: CREATE_CART_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };