import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

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

export const userReducer = (state = { user : {} }, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
        case USER_REGISTER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading : true,
                isAuthenticated : false
            };
        case USER_LOGIN_SUCCESS :
        case USER_REGISTER_SUCCESS: 
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            };
        case USER_LOGIN_FAIL:
        case USER_REGISTER_FAIL: 
            return {
                ...state,
                loading: true,
                isAuthenticated : false,
                user: null,
                error: action.payload,
            }
        case LOAD_USER_FAIL:
            return {
                loading: true,
                isAuthenticated : false,
                user: null,
                error: action.payload,
            }
        case LOGOUT_USER_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false
            }
        case LOGOUT_USER_FAIL:
            return {
                ...state,
                loading:false,
                error: action.paylaod
            }
        case CLEAR_ERRORS : 
            return {
                ...state,
                error: null
            }
        default : 
            return state
    }
};

export const allUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case ADMIN_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADMIN_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload.users,
          usersCount: action.payload.usersCount
        };
  
      case ADMIN_USER_FAIL:
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