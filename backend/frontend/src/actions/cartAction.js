import axios from 'axios';
import  {
    CREATE_CART_REQUEST,
    CREATE_CART_SUCCESS,
    CREATE_CART_FAIL,

    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    
    DELETE_CART_REQUEST,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAIL,

    CLEAR_ERRORS,
} from '../constant/keys';

  
// Create cart
export const createCart = (id) => async (dispatch) => {
  try {
      dispatch({ type : CREATE_CART_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/cart/new`,
      id,
      config
    );

    dispatch({
      type: CREATE_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CART_FAIL,
      payload: error.response.data.message,
    });
  }
};


  export const getAllCartItems = ( ) => async (dispatch) => {
    try {
        dispatch({
             type :GET_CART_REQUEST
        });

        const { data } = await axios.get(`/api/v1/carts`);

        dispatch({
            type: GET_CART_SUCCESS,
            payload:  data
        })

    }   catch (error) {
        dispatch({
            type: GET_CART_FAIL,
            payload: error.response.data.message,
        })
    }
};

// Delete Cart
export const deleteCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CART_REQUEST });

    const { data } = await axios.delete(`/api/v1//cart/delete/${id}`);

    dispatch({
      type: DELETE_CART_SUCCESS,
      payload : data.success
    })

  }catch(error) {
    dispatch({
      type: DELETE_CART_FAIL,
      payload : error.response.data.message
    })
  }
}
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};

  