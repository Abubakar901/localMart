import axios from 'axios';
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    CLEAR_ERRORS
} from '../constant/keys';

export const postLogin = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        '/api/v1/login',
        { email, password },
        config
      );
  
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });

    } catch (error) {
      dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.message });
    }
  };

  export const postRegister = (userData) => async (dispatch) => {
    try {
      dispatch({ type : USER_REGISTER_REQUEST });

      const config = { headers: { "Content-Type": "multipart/form-data" } };

      const { data } = await axios.post('api/v1/register', userData, config );

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data.user });

    } catch(error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response.data.message
      })
    }
  };

  
export const clearErrors = () => async (dispatch) => {
  dispatch({
      type: CLEAR_ERRORS
  });
};