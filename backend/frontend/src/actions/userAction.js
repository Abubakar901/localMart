import axios from 'axios';
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,

    ADMIN_USER_REQUEST,
    ADMIN_USER_SUCCESS,
    ADMIN_USER_FAIL,

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
      }); 
    }
  };


export const loadUser = () => async (dispatch) => {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
  
      const { data } = await axios.get(
        '/api/v1/aboutuser',
      );
  
      dispatch({ type: LOAD_USER_SUCCESS , payload: data.user });

    } catch (error) {
      dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
  };
  

export const logout = () => async (dispatch) => {
  try {
    await axios.get('/api/v1/logout');

    dispatch({ type: LOGOUT_USER_SUCCESS})

  } catch(error) {
    dispatch({ type : LOGOUT_USER_FAIL, payload: error.response.data.message });
  }
}; 


// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(`/api/v1/me/update`, userData, config);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};


// get all users for admin
export const getAdminUsers = () => async(dispatch) => {
  try {
      dispatch({ type: ADMIN_USER_REQUEST })

      const { data } = await axios.get(`/api/v1/admin/users`) ;

      dispatch({
          type: ADMIN_USER_SUCCESS,
          payload: data
      })
  }catch(error) {
      dispatch({
          type: ADMIN_USER_FAIL,
          payload : error.payload.data.message,
      })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({
      type: CLEAR_ERRORS
  });
};